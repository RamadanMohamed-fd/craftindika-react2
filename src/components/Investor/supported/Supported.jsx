import React, { useEffect } from "react";

const Supported = (props) => {
  const handleValue = () => {
    props.linkValue("#invesrtment");
  };

  return (
    <div
      id="supported"
      onMouseEnter={handleValue}
      className=" flex flex-col justify-center items-center  pt-20 bg-[#343935] "
    >
      <p
        data-aos="fade-down"
        className=" text-[2.8rem] opacity-80 text pt-[4.5rem] max-sm:text-4xl text-white"
      >
        Supported by
      </p>
      <div
        data-aos="zoom-in"
        className="flex justify-evenly items-center lg:w-[50%] sm:w-[80%] max-sm:w-[100%] px-4 max-sm:flex-wrap  pb-[2rem] pt-5 "
      >
        <div data-aos="zoom-in">
          {" "}
          <svg
            width="200"
            height="200"
            viewBox="0 0 214 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="px-6"
          >
            <path
              d="M0.90918 23.9198H29.597L28.03 26.0519H0.90918V23.9198Z"
              fill="white"
            />
            <path
              d="M0.90918 19.963H32.5118L30.9415 22.0926H0.90918V19.963Z"
              fill="white"
            />
            <path
              d="M0.90918 27.8799H26.6847L25.124 29.9971H0.90918V27.8799Z"
              fill="white"
            />
            <path
              d="M213.043 26.0519H184.468L186.034 23.9206H213.043V26.0519Z"
              fill="white"
            />
            <path
              d="M213.043 29.9971L181.562 30L183.121 27.8799H213.043V29.9971Z"
              fill="white"
            />
            <path
              d="M188.945 19.963H213.043V22.0939L187.378 22.0959L188.945 19.963Z"
              fill="white"
            />
            <path
              d="M28.6953 29.9971L42.3088 11.5016H59.2016C61.069 11.5016 61.0445 12.2106 60.1326 13.4469C59.2058 14.7023 57.6288 16.8613 56.685 18.1358C56.206 18.7834 55.3397 19.963 58.2097 19.963H80.841C78.9587 22.5413 72.8536 29.9971 61.8914 29.9971H28.6953Z"
              fill="white"
            />
            <path
              d="M106.658 19.9617L99.2764 29.9971H79.8027C79.8027 29.9971 87.181 19.963 87.1877 19.963L106.658 19.9617Z"
              fill="white"
            />
            <path
              d="M134.818 19.9634L127.432 29.9975H107.966C107.966 29.9975 115.345 19.9634 115.352 19.9634H134.818Z"
              fill="white"
            />
            <path
              d="M141.151 19.9634C141.151 19.9634 139.728 21.9087 139.037 22.8421C136.592 26.1468 138.753 29.9967 146.733 29.9967H177.997L185.381 19.9626L141.151 19.9634Z"
              fill="white"
            />
            <path
              d="M38.215 0L31.4375 9.20836H68.3758C70.2427 9.20836 70.2183 9.91727 69.3055 11.1536C68.3787 12.4078 66.8279 14.5913 65.884 15.8661C65.4047 16.5121 64.5383 17.6917 67.4087 17.6917H82.5142C82.5142 17.6917 84.9496 14.3783 86.9897 11.6085C89.7665 7.84026 87.2304 0.000410936 77.3045 0.000410936L38.215 0Z"
              fill="white"
            />
            <path
              d="M136.49 17.6921H88.8604L101.885 0.000411987H121.352L113.888 10.1439H122.577L130.046 0.000411987H149.51L136.49 17.6921Z"
              fill="white"
            />
            <path
              d="M176.47 0L163.448 17.6917H142.819C142.819 17.6917 155.846 0 155.852 0H176.47Z"
              fill="white"
            />
          </svg>
        </div>
        <div data-aos="zoom-in">
          {" "}
          <svg
            width="180"
            height="98"
            viewBox="0 0 168 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="px-6"
          >
            <g clip-path="url(#clip0_332_6104)">
              <path
                d="M47.6475 35.5918C47.6475 37.6085 47.8652 39.2436 48.2462 40.4427C48.6817 41.6418 49.2259 42.9499 49.9879 44.3671C50.2601 44.8031 50.3689 45.2392 50.3689 45.6207C50.3689 46.1657 50.0424 46.7108 49.3348 47.2558L45.9058 49.5451C45.416 49.8721 44.9261 50.0356 44.4907 50.0356C43.9464 50.0356 43.4021 49.7631 42.8578 49.2725C42.0958 48.455 41.4427 47.5829 40.8984 46.7108C40.3541 45.7842 39.8099 44.7486 39.2111 43.495C34.9657 48.5095 29.6318 51.0167 23.2092 51.0167C18.6373 51.0167 14.9906 49.7086 12.3236 47.0923C9.6566 44.4761 8.2959 40.9878 8.2959 36.6274C8.2959 31.9944 9.92875 28.2336 13.2489 25.3993C16.569 22.5651 20.9777 21.1479 26.5838 21.1479C28.4343 21.1479 30.3393 21.3115 32.3532 21.584C34.367 21.8565 36.4353 22.2926 38.6124 22.7831V18.8042C38.6124 14.6618 37.7416 11.7731 36.0543 10.0834C34.3126 8.39377 31.3735 7.5762 27.1825 7.5762C25.2775 7.5762 23.3181 7.79422 21.3042 8.28476C19.2904 8.77531 17.331 9.37486 15.426 10.1379C14.5551 10.5195 13.902 10.7375 13.521 10.8465C13.14 10.9555 12.8679 11.01 12.6502 11.01C11.8882 11.01 11.5072 10.465 11.5072 9.32036V6.64961C11.5072 5.77753 11.616 5.12347 11.8882 4.74194C12.1603 4.3604 12.6502 3.97887 13.4122 3.59733C15.3171 2.61624 17.6031 1.79867 20.2701 1.14461C22.9371 0.43604 25.7674 0.10901 28.7609 0.10901C35.2379 0.10901 39.9731 1.58064 43.0211 4.52392C46.0147 7.46719 47.5387 11.9366 47.5387 17.9321V35.5918H47.6475ZM25.5497 43.8765C27.3458 43.8765 29.1963 43.5495 31.1558 42.8954C33.1152 42.2414 34.8569 41.0423 36.3264 39.4071C37.1973 38.3715 37.8504 37.2269 38.177 35.9188C38.5036 34.6107 38.7213 33.03 38.7213 31.1769V28.8877C37.1429 28.5061 35.4556 28.1791 33.7139 27.9611C31.9722 27.7431 30.2849 27.634 28.5976 27.634C24.9509 27.634 22.284 28.3426 20.4878 29.8142C18.6917 31.2859 17.8208 33.3571 17.8208 36.0823C17.8208 38.6441 18.474 40.5517 19.8347 41.8598C21.141 43.2225 23.046 43.8765 25.5497 43.8765ZM69.2555 49.7631C68.2758 49.7631 67.6227 49.5996 67.1873 49.218C66.7518 48.891 66.3708 48.1279 66.0443 47.0923L53.2536 4.95996C52.9271 3.86986 52.7638 3.16129 52.7638 2.77976C52.7638 1.90768 53.1992 1.41713 54.0701 1.41713H59.404C60.4382 1.41713 61.1457 1.58065 61.5267 1.96218C61.9622 2.28921 62.2887 3.05228 62.6153 4.08788L71.7592 40.1702L80.25 4.08788C80.5222 2.99778 80.8487 2.28921 81.2842 1.96218C81.7196 1.63515 82.4816 1.41713 83.4613 1.41713H87.8156C88.8497 1.41713 89.5573 1.58065 89.9927 1.96218C90.4281 2.28921 90.8091 3.05228 91.0268 4.08788L99.6265 40.6062L109.043 4.08788C109.369 2.99778 109.75 2.28921 110.131 1.96218C110.567 1.63515 111.274 1.41713 112.254 1.41713H117.316C118.187 1.41713 118.676 1.85317 118.676 2.77976C118.676 3.05228 118.622 3.32481 118.568 3.65184C118.513 3.97887 118.404 4.41491 118.187 5.01446L105.069 47.1468C104.743 48.2369 104.362 48.9455 103.926 49.2725C103.491 49.5996 102.783 49.8176 101.858 49.8176H97.1772C96.1431 49.8176 95.4355 49.6541 95.0001 49.2725C94.5647 48.891 94.1837 48.1824 93.966 47.0923L85.5296 11.9366L77.1476 47.0378C76.8755 48.1279 76.5489 48.8365 76.1135 49.218C75.6781 49.5996 74.9161 49.7631 73.9364 49.7631H69.2555ZM139.196 51.2347C136.366 51.2347 133.535 50.9077 130.814 50.2536C128.092 49.5996 125.97 48.891 124.555 48.0734C123.684 47.5829 123.085 47.0378 122.867 46.5473C122.65 46.0567 122.541 45.5117 122.541 45.0211V42.2414C122.541 41.0968 122.976 40.5517 123.793 40.5517C124.119 40.5517 124.446 40.6062 124.772 40.7152C125.099 40.8243 125.589 41.0423 126.133 41.2603C127.984 42.0779 129.997 42.7319 132.12 43.168C134.297 43.604 136.42 43.822 138.597 43.822C142.026 43.822 144.693 43.2225 146.544 42.0234C148.394 40.8242 149.374 39.0801 149.374 36.8454C149.374 35.3192 148.884 34.0656 147.904 33.03C146.925 31.9944 145.074 31.0679 142.407 30.1958L134.515 27.743C130.542 26.4894 127.603 24.6363 125.806 22.1835C124.01 19.7853 123.085 17.1146 123.085 14.2803C123.085 11.9911 123.575 9.97442 124.555 8.23026C125.534 6.4861 126.841 4.95996 128.473 3.76085C130.106 2.50723 131.957 1.58065 134.134 0.926585C136.311 0.272525 138.597 0 140.992 0C142.189 0 143.441 0.054505 144.639 0.21802C145.891 0.381535 147.034 0.599555 148.176 0.817575C149.265 1.0901 150.299 1.36263 151.279 1.68966C152.259 2.01669 153.021 2.34372 153.565 2.67075C154.327 3.10679 154.871 3.54283 155.198 4.03337C155.524 4.46941 155.688 5.06897 155.688 5.83204V8.39377C155.688 9.53838 155.252 10.1379 154.436 10.1379C154 10.1379 153.293 9.91991 152.367 9.48387C149.265 8.06674 145.782 7.35818 141.917 7.35818C138.815 7.35818 136.366 7.84872 134.678 8.88432C132.991 9.91991 132.12 11.5006 132.12 13.7353C132.12 15.2614 132.664 16.5695 133.753 17.6051C134.842 18.6407 136.855 19.6763 139.74 20.6029L147.469 23.0556C151.388 24.3092 154.218 26.0534 155.905 28.2881C157.593 30.5228 158.409 33.0845 158.409 35.9188C158.409 38.2625 157.919 40.3882 156.994 42.2414C156.014 44.0946 154.708 45.7297 153.021 47.0378C151.333 48.4004 149.319 49.3815 146.979 50.0901C144.53 50.8532 141.972 51.2347 139.196 51.2347Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M149.483 77.7241C131.576 90.9688 105.559 98 83.1891 98C51.8384 98 23.5902 86.3904 2.25429 67.0957C0.567015 65.5695 2.09101 63.4983 4.10485 64.6974C27.1824 78.1057 55.6484 86.2269 85.0941 86.2269C104.96 86.2269 126.786 82.0845 146.87 73.5818C149.864 72.2191 152.422 75.5439 149.483 77.7241Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M156.94 69.2214C154.654 66.2781 141.808 67.8042 135.985 68.5128C134.243 68.7308 133.971 67.2047 135.549 66.0601C145.782 58.8654 162.6 60.9366 164.559 63.3348C166.519 65.7875 164.015 82.6296 154.436 90.6963C152.966 91.9499 151.551 91.2959 152.204 89.6607C154.381 84.2647 159.226 72.1101 156.94 69.2214Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_332_6104">
                <rect
                  width="167"
                  height="98"
                  fill="white"
                  transform="translate(0.0429688)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div data-aos="zoom-in">
          <svg
            width="165"
            height="165"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="px-6"
          >
            <g clip-path="url(#clip0_332_6109)">
              <path
                d="M57.1078 94.8417C56.4097 100.76 55.6278 106.667 55.0504 112.596C54.8896 114.216 54.2867 114.473 52.8582 114.407C39.0239 113.8 25.1789 114.057 11.3373 114.028C8.66628 114.025 6.00225 114.172 3.33856 114.274C3.26548 114.021 3.19973 113.771 3.13014 113.518C2.76855 112.173 2.43948 110.814 2.13629 109.448C2.45801 109.371 2.77589 109.301 3.09727 109.231C5.71339 108.676 6.57226 107.585 6.64185 104.875C6.76984 99.5994 6.91217 94.3281 6.92686 89.0529C6.94505 80.692 6.86846 72.3312 6.8174 63.9703C6.79922 61.3586 6.72228 58.7503 6.68207 56.1386C6.68207 56.0725 6.67857 56.0099 6.67857 55.9477V55.9441C6.62367 53.6115 6.21102 52.3406 4.97587 51.5471C4.27786 51.0989 3.32073 50.8015 2.01984 50.5589C1.36589 50.4376 0.704256 50.3385 0.0429688 50.2284V45.6659C2.60069 45.7798 5.15877 45.9011 7.71999 45.9672C8.39981 45.9819 9.07928 45.9967 9.7591 46.0037C10.3218 46.0111 10.8809 46.0185 11.4436 46.022C22.5701 46.158 33.7078 46.3637 44.8304 45.8198C47.5343 45.6838 50.2823 45.695 52.9278 44.9125H53.5527C53.929 45.3424 53.8926 45.8564 53.8597 46.3781C53.509 52.0646 53.1327 57.7512 52.8403 63.4416C52.7854 64.4628 52.4896 64.852 51.4845 64.7163C51.0205 64.6502 50.5417 64.6576 50.0777 64.7128C49.259 64.8158 48.9338 64.4924 48.7219 63.6694C48.1043 61.245 47.6074 58.7798 46.7268 56.4289C44.9986 51.8259 43.3102 50.6176 38.498 50.6176C32.3044 50.6176 26.1108 50.6141 19.9134 50.6211C17.5494 50.6211 17.3592 50.8233 17.3592 53.2294C17.3592 60.7637 17.3847 68.3016 17.3337 75.8359C17.3263 77.0333 17.5966 77.4594 18.8685 77.4337C23.1838 77.3455 27.5065 77.4633 31.8075 76.9781C34.4897 76.6733 35.3664 75.9495 36.028 73.3746C36.4557 71.7033 36.9159 70.039 37.223 68.3455C37.4167 67.269 37.8185 66.8872 38.9477 66.9203C41.7614 66.9864 41.7831 66.9277 41.5677 69.7525C41.0561 76.5925 41.14 83.4398 41.3921 90.2834C41.4397 91.5838 41.0963 91.9803 39.7734 91.9216C37.2632 91.8186 37.2632 91.8995 36.7149 89.4312C36.4662 88.3072 36.2326 87.1829 35.9329 86.0737C35.3192 83.8037 33.8574 82.4481 31.4861 82.3637C27.1232 82.1985 22.753 82.1507 18.3863 82.022C17.5239 81.9925 17.3448 82.3598 17.3483 83.135C17.3704 89.9385 17.3008 96.7416 17.3847 103.541C17.4284 107.192 19.3651 109.209 23.0191 109.283C29.0008 109.4 34.9898 109.415 40.9714 109.261C45.192 109.143 48.0092 106.704 49.7374 102.957C50.9397 100.349 52.043 97.7006 53.1977 95.0741C53.6142 94.1228 56.238 93.3915 57.0308 93.9976C57.3707 94.2539 57.1441 94.5552 57.1078 94.8417Z"
                fill="white"
              />
              <path
                d="M178.294 77.9695C173.222 90.5326 167.898 103 162.541 115.443C160.283 120.688 157.352 125.556 153.158 129.527C150.257 132.27 146.886 133.931 142.934 134.798C142.235 134.951 141.195 135.034 140.099 135.076C137.272 135.183 134.439 134.791 131.753 133.896C131.129 133.688 130.515 133.447 129.936 133.108C129.183 132.671 128.935 132.249 129.187 131.378C130.218 127.863 130.809 124.248 131.273 120.622C131.417 119.501 131.833 119.144 132.9 119.193C133.278 119.21 133.661 119.186 134.034 119.119C135.096 118.929 135.622 119.227 135.782 120.427C136.042 122.389 136.491 124.329 136.904 126.272C137.463 128.917 138.896 129.916 141.603 129.64C145.743 129.214 148.86 126.988 151.517 123.965C153.249 122 154.626 119.788 155.857 117.474C156.223 116.79 156.19 116.232 155.93 115.564C150.841 102.431 145.655 89.3391 140.046 76.4195C139.089 74.2191 137.762 72.6504 135.318 72.1069C133.535 71.7103 134.408 70.149 134.35 69.1095C134.284 67.912 135.362 68.4629 135.877 68.4995C142.637 68.9955 149.39 68.7347 156.146 68.47C156.712 68.4478 157.622 68.1578 157.421 69.2121C157.246 70.1378 158.302 71.5117 156.574 71.9452C155.817 72.1325 155.05 72.2869 154.293 72.4743C151.366 73.1943 150.504 74.6564 151.487 77.529C154.326 85.8238 157.414 94.0229 160.593 102.193C160.907 103.008 161.243 103.816 161.704 104.955C162.296 103.666 162.786 102.678 163.206 101.664C166.48 93.7621 169.754 85.8603 173.002 77.9442C174.066 75.3581 173.408 73.8668 170.843 72.8712C170.068 72.5699 169.279 72.2834 168.471 72.0998C167.668 71.9198 167.412 71.512 167.401 70.6894C167.368 68.3898 167.335 68.3198 169.619 68.4889C171.943 68.6616 174.263 68.7607 176.584 68.7755C176.642 69.0068 176.697 69.2385 176.752 69.4698C177.154 71.2111 177.508 72.9742 177.808 74.7559C177.987 75.8204 178.152 76.893 178.294 77.9695Z"
                fill="white"
              />
              <path
                d="M115.324 67.1692C120.167 67.2441 124.023 67.7078 127.811 68.747C128.86 69.0346 129.121 69.4417 128.966 70.6015C128.572 73.55 128.355 76.5292 128.223 79.5034C128.171 80.6562 127.84 80.9219 126.717 81.0608C125.001 81.2735 124.172 80.7476 123.819 79.0446C123.534 77.6724 122.901 76.3769 122.55 75.0139C122.066 73.1369 120.854 72.1132 119.076 71.5757C116.393 70.7635 113.727 70.7846 111.12 71.788C107.186 73.3022 106.043 77.7252 108.685 81.0418C110.089 82.8053 112.002 83.8708 113.978 84.8257C116.833 86.2056 119.754 87.4578 122.557 88.9358C126.292 90.9049 129.377 93.523 130.501 97.8926C132.105 104.123 129.429 110.161 123.676 113.009C118.717 115.464 113.457 115.598 108.117 114.823C105.338 114.42 102.61 113.773 99.9306 112.911C99.2318 112.686 98.9671 112.451 99.0587 111.61C99.4619 107.909 99.4032 104.19 99.0514 100.489C98.9528 99.4518 99.271 99.3382 100.182 99.2113C102.04 98.9525 103.062 99.5759 103.51 101.436C103.8 102.644 104.423 103.768 104.808 104.958C106.662 110.693 111.292 111.751 115.443 111.394C118.481 111.132 120.998 109.924 121.975 106.709C122.933 103.557 121.904 100.582 119.144 98.3668C116.674 96.3833 113.726 95.2956 110.894 94.0001C108.953 93.1117 107.021 92.211 105.228 91.0427C100.682 88.0808 98.6744 83.8958 99.349 78.4807C100.041 72.926 103.484 69.7873 108.55 68.1785C111.048 67.384 113.631 67.0964 115.324 67.1692Z"
                fill="white"
              />
              <path
                d="M67.2984 90.0594C67.2984 85.2964 67.2592 80.5324 67.3267 75.7705C67.3428 74.6343 66.9966 74.3667 65.9293 74.4149C64.007 74.5017 62.0762 74.3991 60.1515 74.4571C59.2496 74.4841 58.9167 74.2908 58.867 73.273C58.7904 71.705 59.0964 70.9566 60.8775 70.6257C65.9153 69.6909 69.0241 66.3131 71.008 61.7456C71.8011 59.9193 72.3946 58.0208 72.7086 56.0591C72.8845 54.9615 73.329 54.6325 74.4354 54.6659C76.9841 54.7432 76.9862 54.6771 76.9862 57.2168C76.9862 60.724 77.0295 64.2315 76.9603 67.7373C76.939 68.8096 77.1712 69.1857 78.3059 69.1207C82.1464 68.8999 85.9934 68.7994 89.836 68.6134C91.6576 68.5252 91.6506 68.4837 91.425 70.2861C91.2953 71.3239 91.0452 72.3709 91.0977 73.4013C91.1788 75.0083 90.4095 75.1173 89.1086 74.989C85.5899 74.6427 82.0561 74.4497 78.5353 74.1245C77.3848 74.0183 76.9407 74.2198 76.9526 75.549C77.0222 83.5042 76.9841 91.4607 76.9897 99.417C76.9907 101.094 77.1103 102.761 77.5268 104.393C78.6021 108.608 81.4512 110.298 85.6353 109.175C87.5349 108.665 89.2128 107.735 90.4836 106.197C90.9491 105.634 91.1788 105.682 91.6397 106.217C93.1889 108.015 93.2295 108.445 91.7971 110.335C90.1185 112.551 87.8315 113.842 85.2374 114.616C82.2492 115.507 79.2099 115.689 76.1486 115.007C70.6621 113.783 67.3613 109.719 67.3074 104.035C67.2634 99.3769 67.2984 94.7183 67.2984 90.0594Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_332_6109">
                <rect
                  width="179.048"
                  height="180"
                  fill="white"
                  transform="translate(0.0429688)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Supported;