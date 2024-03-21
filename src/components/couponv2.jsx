import React from 'react';
import "../css/couponv2.css"
const CouponCode = () => {
    return (
        <div className="im">
            <div className="container">
                <div className="coupon-card">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEUBiEb+8QIakVP/9AD/9gD/8wAECAkAh0cAAAgAhEgAhUf/+AAAgkgfjkEAg0YAiEUAAA1npjVlqzWXwSgAAAYAgEnUzA2IkBOszSMAiUH38QOrxyaFuC/i4AsvlD7//Aiupg4/mD3o6BF2sDLF1xxsaQzHxA/i2AilsRW40CDZ4heOuypCQAZImzpVUw/C1xthZg7c5BNXpTchLxG/2BtNnzfMwxKJhBBlYhV/fhK6txHx5g9CQBUkJg7O4BUkIQ43NAihmxCUkA4xNRAAekp+tDQZGA2ppBFaqi7W1g+hyCemoBFxrDYAFxFZXRaavSyVmRxCOxEOHQ0PP3K4AAAPt0lEQVR4nO1cC5faNhaGSoqQJdsMjLNY40IwpFlDKAsb0iSkNG3DZsvOdh///8fslWQY22CGyTbb0R59OWcwsgB9ulf3JTmNxv85vvq9B/DF4RjaD8fQfjiG9sMxtB+Oof1wDO2HY2g/HEP74RjaD8fQfjiG9sMxtB+Oof1wDO2HY2g/HEP74RjaD8fQfjiG9sMxtB+Oof1wDO2HY2g/HEP74RjaD8fQfjiG9sMxtB+Oof1wDO2HY2g/HEP74RjaD8fQfjiG9sMxtB+OYT3CkP6G4/hy+CyGlHqMCSFYEAjm0cfN9MEMKWUiHl4lu2yscJN0hrGg3pcY22+DBzKkLJhNxynCGCFEAAhzko6ns0A8Vkk+iCGN+t2UYNKsgGCU7voR+1KD/K/wAIYeW80xrrLbkyR8vPQeI8eLGdJgNeZH0iuR5JulCL/kYD8LFzKkIs7QWX5GW8f+oxPjZQypN5LoPn6ao0wem8m5iKEXZ/wSflpVX/ksfEy6eglD1l8c2886ILwYPipNvYAhm8lafogPeHV9Erl6TJp6P0O2rCVI8Ovv3rx916wuUX4l/gdDvxD3MmSzWhND1m9aCu9fVLugzuOheB9D1pf1S+7b1hOF1vfr6i05PBWphipiN2jQO2vkHfUNqiuZNtix5tOLgv57GNI4rRUhfmYIPnnS/u7I1KbxiR8PvVGOjh+wPcWg71f6Bkmv2sQ6vVmFNqWzS4z2PQy9eb0b5N/uGbbagyP5boLjbxMbjnPwTV9zCKmYDjZlnWYjzm/LDL3+gHfLDGm4GYwusNrnGUbJmUBt8MOe4ZOWkSEGyzrgXE0KwdMjirSPwJlofriJJnr+qUgw7pTUNBQZkv0yQzbFeFnqRemYp/79BM8zpP45Rz94uWd4bWSI3n14CfjwWstdzqp66o0wnvaHClNJuB6x2GI8KouQNlKyqFiqaIxkiU6oCPYvSUvPMhTjc6Ea//Ggpc/1TAx+bbXBtLbXWu5oElRWicgwWCCq8HGO8JUaXyTRqGJD6Ayhm3IbjSXalKJ672qQ+hfl3ecYsk5drmSw/j63pe0X5O5969t8WviounBSkuaqG81zRWTLWXWc7EhvG96S8Gn52+Lb+LLCwhmGlE7Ox2roxfetaxBb+7WeCfRUE279tFfttKJqQ4IyPcyQ+RJvBFXFniAS+Ug9eKNKBcEYoVBfHziJLkYr3eRp2VLoGwWQcocqbY0CCvdojWGtZ0i9e0QInOSP71s//7Q25oj/ZBg+3as2LgvRgyV3GwWMeSLcYNRnopMt1jJ9pcMDEYzGqUyzmQBRbz6OJut0s4z2Y5kgKZbzVE70mvWCTt4XtGHVm8D1JKlLTc/IMJjUECMIYfinouwBgOv3YCRfqgCn/UPzIPlFUFxN3pigaaKwkzydCX/BOQbLS5QfYB2p3yC+nHHU3ahwF/PcfHp9ibLdACwwKKvXYKvUeB2eMPZqAB+D4fBxjfs/I8NhjSFFTw2aa/O6bprXb/6k8YfBgSEqGnhYhmpO1NwgksWCLgdpNt1OFwjMZATeQPa2yRij8RQ1UzS+yWSTbIwQvSveTPnkJksJSSFsQNA3STaoiX1fynE3ScAkVrzJBQyjXY2SEh2Mtj6AVipcf7Nua+G9AVcIKHwK9workc44OEwDRCY+DYexYIGI0yYZjiAE8CNYUj15BaJO+7DOVrIpzUfFDjXlUgTCT5touMJo0Y9A1zOEumLoC+Z5Ykzw6KEMg7ROhGa5fTd4ry/a/Nm1bnh3PCOF2C1kU4Q7sa8wzDDeRNTzgsCjyqyuJAQAVMnZo8GgKZUfoHRBpBk0WxC+UlY4yggaptj4CW+FSSYg1A2A7RTz2wcy9GY1IszdYOtp08SkzwfPDdOvjy0vX96tjWBDZKydIfWiCeEhi5fJdORHC5TuwFR6xlKwKwgLlOiVc5lo50J9jOZaX6MNSkGfb7Vq0GET9aJwtZ1u+9ENag4ftg4hXKzJ67EORyGfeGeYPsN/0Q0/H8WmIO/d3byGiGyMrW/QAJSKJinng4FMwIpM0CGIYcBWR0MwxXinjbEHcapWQXD8eD5upibe82AukiWYKz7A0wVJa/KMWhmCZp8kSNZPNKE3g7eG4fpFxQ0WO28O/oItMdrHzkoBQW540U12KYSo3cKKDRY4bajBBkke2KlYCOlcw1ti3AUrpOUZsh4EvwinvWS6gC/pnQj1zzKMj5ahDpoRf6ftS/sT/0tbWZj36Cf92np9KsKTB1PDbjBe5dPMOhxvEO5FjAVxSpp/xWinO4Ye5KM4UwwoGyOue4dRiiZUcwLHfwti1H2VC5lIUGQRMDGuOt/7GdKjzBe9fvMc8ObTNxpraV5/wb+Yi5MS54ccIQKxhSb7BSuJ0jHYE2VbwIqkfU4mEYXrOJlBdD4yeRWEPZGhgtGNHn4wIakvm6nyfCyeYLlDWBehowyRakZ5H0NQiOpg3xov8UJ7W0TWLzSAusFphnsnBTNG0q3291OIyuRsQqRyDwKWXQ88JdrFQeNqMejd4GbfLEOOu1pYAcSpV4qh50s0/ziB2M8X8dUCotcbYBgJIUaELKIaJrUMb4+W1c/GwvA9YeMFX5yNXXGSrw464qDmPI9F0uFHWFtmGRLeiabgKmUqwev3wbLqnAQ0kpv8S7wiebp4xXEiIJY0ffHo45Y35S75xwSabuoqQ3UMYeLKYyXGoFy/3bd/0IQ/nI9d8d64sBGWe4xH4AZBycAIyt2Ug9MUU4jZMJdZ7Ms8iRBzbnJkcMw80/Mkphw0m40kZNBczn3WCDKkLOn8rxwdZaP3MYSkuqJvf2sV/TrKLejb88VwtMsZhtTv5wh1zkDpVZLc+sK/7UNWAC/wri8oXeZ6Tfu3vok0vVle0qDxrZKlF5u+YHFDNkuS0RD0e1ZblKpl2K0y/NXY0L1wDOH2iUCmJMO7uI0ekL/3IMugqmBWeKcu9v09Wr2q9lXX5tKr43c5Q4L//meFX3OZ4TeK4fX1UR2xwrB2efzPcLGWkoHB/n3r+hqi7pcnApkSw93vvodRa0urlubA1PxZ/1HjF1RoPcXwH4+X4bG3UMh9HxDSNUGM0F3LKfDtPpYqrcG7hkZxgZYWarV/3tI4aj7RcglDujrlwtEL7QTz2pqS0etr3fBjjUk9BGqhTpv8u1NGzDT4jOW37hBGquSiL+PimHSLZ7oUms3nayleHrXpAX9qlVNB/J1pONqb2ctwnyCyHleVjkle1whFoioh4Pr93QKVAbF07DWiCfTn40L1ZajqA5tYqh4FPkGiah/d2tVQnx+eSoC5TgVbTw6pIDcFxOOqfo70oKS+3qPDZhOcCl1A4JuwI0+sd7wJqK/njG/vkhNl+/B0CdqCsoKFhpwR+q0eLEOVshz/9FoX8lsv9zqJ1rnfrzNL4/0AwzxIUuE2JPJztXB5JmrsGR5FI3MH0v1cijqd4/1M8Smm87GaipMbQffJMDnOgI8qovhZu66AYe7flXHDSFdfVRrH/IXqj7uRrldWlFT3yj5m5tfRJsoNj6+WTSqUahV3NVScWhbqpQxpv8jQbKgMTO3priLKv9WGpr3Wt0+clSpsI9KZ6kDwKpql6kKOBFXDJVm3hAl8OZnT/SLZx+66eotu+jC5eXEjZ9iD/rimRnOWoUro7gi+/vRM4Z9/0Di4P2Tev9V3Pz09Yrgo6k7Q05KedCQxm/1eR6+pSLACokQVYne6SqR/JhdYpJks1V08LfA5EurlDINCVIP+pUXVzouBBTVUbwc/GtF+c7TZ3S0qj2eMjd71Jws/gKWOQKblLQqq1z9adZUkN7rrRu2l0nChmFBoIs2hygkFE+oEaB8rodYlh2cZ5tZMy2JtltvzwUnHfqhNVe/KcvlLbA9OZg7+gAZqZcnYywtw+i+jKXCQut6O/Y2Stk6ndH2ajEP1DfKmALU9hut9xTmGXpQdNiCenUsk8tpU+011N5WMK8WhwGz1EH6j84GV+rrF8qqERJGaxyBussgPEaC+FwrQKIITs5VSNUy8ppB4D8PQjEDBuMEnrSMhGf6vzd1PlbiG8HKdPaTClEZQVyuVTl9IE5csqdoOaeJtB2YL3wQsUd+JJiKMNur847B3MrKQZ5T07P5hsN/E522thu9P+wSuy4qto7hmv+tw930rEyeRhfYAQe3mHY5fabPiUTE2foU1uBKqOFmHR9nnMqTDPJ9/2tY4PnFh8L2++++qCHF57zOMtgcnk0R1caH+5ESv0NSnYd4Jz4yvmKlzybII/UOdc3ulZ3e5g5s8sPha47SSNom5Wy3q4ywqxsd5oGY6qciGjbBJUUrQX9g1ZkVvFW7VxOGJCgDQ0gRucSFK176iHKA/hCHd784QjZopr7mblsJ9SvXxRjw3kU0GK0sNGmxHCUttQ2dqheLEVKTuzhKgAKIBwvuFPGuolPfUwZYLGUIOdd82cC1wp2jBPX+iF9QumpmzKEsvVJHNwVfkHoNp9aTK9xHjxU20pidyHKvLYhShjRWens2y7zkxJKoFqUvBdyVnP9RHq9BW0EhHNmTizXgxMs/7rVRj5jeVWcnNxyE6x8mVWozFPUmhNKK+kHgJQ3ruUNQ5CU4KiR2NlhK0mEi9Lx+bNGpb0MTChCobOlIrFO9YPvBgbChyX+cVV4VQN8Za5P8NQ3VI4DOkiBZxgaCRAlr0zeaDyYvk16qt4qp1LEziOSlmfLmekkVgzErhyN+tEerZ0233MaRenD6YIkr73uFXKe0NVHq/iY28vGCjnLyq8eBF+WEb2ueqsSEhmZd3zcGWqw/cDAfwtxgniUyl97dnRXjJCVqTzT2QYGHYnawH6IZ5W+gNe3tsK2eKVqrrqK9uFfMH1lUtM/1FBSVtBDvVXl+iuYxhCFoyufQcuyG4KB/H8oTOBO7GQcUeVU+t7wT6b4m7SiIE9Y4+YtrPE7jgnDcNg1MVjTrgV41H9ZzXRU8jgK247HELcP54+piOsTcufmaGDSfnHwnaC3Ax+903Kiq49LknGm1P1f0q/GRyfGb798alDMMGi7uS1wenit8ufmQaqvCAp/Oo8Kdp3eN5iKdT/xHye+gTlqyxyiSvnEpQz5HKbBk+Sn4Pf0qWMm82naeS7BM60kzH3ZUI2OPk91nPclMmAn91u02m02lyu/LV89y//cB+M3zm8/jU8zwWBCyA9O4xPYp3Au7/VLAfjqH9cAzth2NoPxxD++EY2g/H0H44hvbDMbQfjqH9cAzth2NoPxxD++EY2g/H0H44hvbDMbQfjqH9cAzth2NoPxxD++EY2g/H0H44hvbDMbQfjqH9cAzth2NoPxxD++EY2g/H0H44hvbDMbQfjqH9cAzth2NoPxxD++EYWg/6VeOr/3f8B4kGUPpzf8FEAAAAAElFTkSuQmCC" alt="" srcset="" className="logo" />
                    <h3>Flat 40% off on food in 10<br /> using HDFC Credit Card</h3>
                    <div className="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">COPY CODE</span>
                    </div>

                    <p>Valid Till: 20 Dec, 2024</p>

                    <div className="circle1"></div>
                    <div className="circle2"></div>

                </div>


            </div>
            <div className="container">
                <div className="coupon-card">
                    <img src="https://images.foody.vn/res/g9/85141/prof/s/foody-upload-api-foody-mobile-16-jpg-180910154630.jpg" alt="" srcset="" className="logo" />
                    <h3>Get 15% off on shopping <br /> above $ 100 at CK</h3>
                    <div className="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">COPY CODE</span>
                    </div>

                    <p>Valid Till: 20 Sep, 2024</p>

                    <div className="circle1"></div>
                    <div className="circle2"></div>

                </div>


            </div>

            <div className="container">
                <div className="coupon-card">
                    <img src="https://seaoffers.seabank.com.vn/uploaded/MCC/co_op%20mart.png" alt="" srcset="" className="logo" />
                    <h3>Coop Market: Upto 45% Off <br /> on Milk & Vegetable  </h3>
                    <div className="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">COPY CODE</span>
                    </div>

                    <p>Valid Till: 20 Sep, 2024</p>

                    <div className="circle1"></div>
                    <div className="circle2"></div>

                </div>


            </div>
        </div>
    );
}

export default CouponCode;
