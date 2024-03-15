import React, { useState, useEffect } from "react";
import { Text } from "zmp-ui";
import productInStoreApi from "./../api/productInStoreApi";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import generateQRCode from "./vnpay";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [addInfo, setAddInfo] = useState('');
    const isDesktop = useMediaQuery({ minWidth: 992 });

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };
    const [Info, setInfo] = useState('');
    const product_price = 100000;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productInStoreApi.getProductInStore();
                setProducts(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        const generateQRCodeData = async (product_price, Info) => {
            const accountNo = '0948190073';
            const accountName = 'OMI GROCERY';
            const acqId = 970422;
            const amount = product_price;
            const addInfo = Info;
    
            const qrDataURL = await generateQRCode(accountNo, accountName, acqId, amount, addInfo);
            setImageUrl(qrDataURL);
            setAddInfo(addInfo);
        };
        generateQRCodeData(product_price, Info);
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container mx-auto">
            <div className="flex flex-col py-4">
                <Text.Title size="normal">Sảm phẩm ưu đãi:</Text.Title>

                {products.map((product) => (

                    <div key={product.Name} className="flex-shrink-0 mb-4">
                        <div className="w-64 flex flex-col">
                            <div className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md" style={{ backgroundImage: `url(${product.Image})` }}>
                                {product.Price && (
                                    <Text.Title size="small" className="absolute right-2 top-2 uppercase bg-yellow-400 px-2 text-white h-6 rounded-full">
                                        Giảm {product.Discount}%  </Text.Title>
                                )}
                            </div>
                            <div className="px-2 py-2 bg-white">
                                <Text bold size="small">{product.Name}</Text>
                                <Text size="xxSmall" className="line-through text-gray">
                                    {product.Price}
                                </Text>
                                <Text size="large" className="!font-bold text-primary text-green-800">
                                    {product.Discount ?
                                        (product.Price - (product.Price * product.Discount / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                        :
                                        product.Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                    }


                                    <button  type="button" onClick={handleShow} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-green-600 focus:ring-green-800 ml-14">
                                        <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                        Mua
                                    </button>
                                    
                                    {/* <Modal show={show} onHide={handleClose} centered> */}
                                    <Modal show={show} centered>

                                        <Modal.Header closeButton>
                                            {/* <Modal.Title>Thanh toán đơn hàng</Modal.Title> */}
                                        </Modal.Header>
                                        <Modal.Body>
                                            {isDesktop ? (
                                                <div className=" payd-flex justify-content-around">
                                                    <div className="qr-code-container">
                                                        <h5 className="text-center">Quét mã VietQR</h5>
                                                        <div className="qr-code-wrapper">
                                                            <img
                                                                src={imageUrl}
                                                                alt="VietQR Code"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="transfer-info">
                                                        <h5 className="text-center mb-3">Hoặc chuyển khoản</h5>
                                                        <p className="mb-1">Chủ tài khoản:OMI GROCERY</p>
                                                        <p className="mb-1">Số tài khoản: 0948190073</p>
                                                        <p className="mb-1">Ngân hàng: MB BANK</p>
                                                        <p className="mb-1">Nội dung chuyển: {addInfo}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="qr-code-container mb-3">
                                                        <h5 className="text-center">Quét mã VietQR</h5>
                                                        <div className="qr-code-wrapper">
                                                            <img
                                                                src={imageUrl}
                                                                alt="VietQR Code"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="transfer-info">
                                                        <h5 className="text-center mb-3 mt-4">Hoặc chuyển khoản</h5>
                                                        <p className="mb-1">Chủ tài khoản: OMI GROCERY</p>
                                                        <p className="mb-1">Số tài khoản: 0948190073</p>
                                                        <p className="mb-1">Ngân hàng: MB BANK</p>
                                                        <p className="mb-1">Nội dung chuyển: {addInfo}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            {/* <Button variant="secondary" onClick={handleClose}>
                                                Đóng
                                            </Button> */}
                                        </Modal.Footer>
                                    </Modal>
                                </Text>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ProductList;
