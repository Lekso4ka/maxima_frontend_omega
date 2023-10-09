import React from 'react'
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'} style={{
            display: 'block',
            height: '40px'
        }}>
            <svg
                width='45'//35
                height='42'//31
                viewBox='0 0 45 42'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M34.1524 19.703C30.875 22.5837 23.1528 27.9007 19.4758 30.2946C18.4814 30.9412 17.1571 30.6208 16.5683 29.6105C16.2576 29.0833 15.9262 28.4114 15.5547 27.6579C14.518 25.5557 13.1684 22.8189 11.0813 20.8201C8.42445 18.2779 3.97836 16.994 1.36453 16.2392L1.11113 16.166C-0.0401265 15.835 -0.329005 14.3037 0.396175 13.3864C2.65182 10.5245 10.9935 2.03328 10.9935 2.03328C11.6054 1.41604 12.351 1.33288 13.4392 1.25379C13.4392 1.25379 27.3872 -0.0263341 32.4975 0.282689C33.3326 0.330796 34.0144 1.03038 34.1115 1.82373C34.5938 5.91441 34.91 12.5971 34.973 16.7131C34.9751 16.8592 34.9808 17.0039 34.9864 17.1471V17.1473C35.022 18.0593 35.0553 18.9131 34.1524 19.703ZM26.8921 11.8903C26.7561 11.9509 26.6277 12.0077 26.504 12.0625L26.5039 12.0625C26.3113 12.1478 26.1302 12.228 25.9497 12.3094C25.5392 12.494 25.1287 12.6785 24.7182 12.863C23.3525 13.4766 21.9869 14.0901 20.6254 14.7114C20.4797 14.7866 20.3171 14.827 20.1516 14.8292C19.9861 14.8315 19.8224 14.7956 19.6744 14.7245C16.8947 13.4677 14.113 12.2148 11.3293 10.9656C11.0635 10.8458 10.8751 10.6754 10.876 10.3704C10.8768 10.0655 11.0669 9.89996 11.3353 9.78254C12.0382 9.47408 12.7409 9.16508 13.4435 8.8561L13.4436 8.85609L13.4438 8.85599C15.4991 7.95216 17.5543 7.04841 19.6156 6.15825C19.8488 6.07099 20.1077 6.07099 20.3408 6.15825C21.9836 6.84562 23.6225 7.5416 25.2616 8.23769L25.2619 8.23782C26.4769 8.75382 27.6921 9.26988 28.9092 9.78254C29.3284 9.95948 29.5781 10.4234 29.1495 10.8091C29.138 10.4239 28.8671 10.3948 28.5783 10.3639L28.5479 10.3606C27.1606 10.2101 25.7744 10.0535 24.3894 9.89099C23.8224 9.82576 23.2557 9.75917 22.6891 9.69259L22.6887 9.69254L22.6882 9.69249C21.9377 9.60431 21.1873 9.51612 20.4363 9.43112C20.2689 9.41194 20.1003 9.45585 19.9662 9.55357C19.8321 9.65128 19.743 9.79511 19.7179 9.95459C19.7048 10.0334 19.7085 10.1138 19.7288 10.1912C19.7491 10.2686 19.7855 10.3412 19.8359 10.4047C19.8863 10.4683 19.9496 10.5214 20.0221 10.5609C20.0945 10.6004 20.1745 10.6255 20.2573 10.6346C20.8342 10.7025 21.4126 10.7566 21.991 10.8107C22.1414 10.8247 22.2918 10.8388 22.4422 10.8531C23.5784 10.9618 24.7146 11.0678 25.8508 11.1711C26.3664 11.2184 26.8819 11.2657 27.3983 11.3024C27.7886 11.3301 27.844 11.3725 27.844 11.7321V18.6969C27.844 19.1136 27.6582 19.3296 27.3327 19.3044C27.0873 19.2856 26.933 19.1601 26.9066 18.9203C26.8931 18.7808 26.8877 18.6406 26.8904 18.5004V12.2376L26.8921 11.8903ZM14.2951 14.0102V14.6274C14.2951 14.6866 14.2948 14.7457 14.2945 14.805C14.2939 14.9238 14.2934 15.0429 14.2951 15.1631C14.3164 16.4636 14.8575 17.4877 16.0275 18.1889C17.1768 18.8919 18.5054 19.2802 19.869 19.3117C21.7267 19.3574 23.3918 18.8535 24.8473 17.7413C25.3589 17.3708 25.7107 16.8335 25.8358 16.2312C25.967 15.5855 25.9469 14.9356 25.9268 14.2861C25.9218 14.1261 25.9168 13.9662 25.9142 13.8064C25.9107 13.578 25.7386 13.4875 25.5034 13.5487C25.4102 13.5755 25.3195 13.6098 25.2324 13.6514C24.8654 13.8162 24.4983 13.9808 24.1311 14.1455C22.9355 14.6815 21.7393 15.2179 20.5456 15.76C20.4214 15.8241 20.2824 15.8576 20.1413 15.8576C20.0001 15.8576 19.8612 15.8241 19.7369 15.76C19.4693 15.6305 19.1969 15.5113 18.9249 15.3923C18.7977 15.3366 18.6705 15.2809 18.5439 15.2243C17.3429 14.685 16.1406 14.1485 14.9368 13.6147C14.4894 13.4166 14.301 13.5348 14.2951 14.0102Z'
                    fill="#4b267d"
                />
            </svg>
        </Link>
    )
}

export default Logo
