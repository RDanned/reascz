import './RegionMapSelect.scss';
import { useState } from 'react';

interface MapProps {
  onChange: (value: string) => void;
}

function RegionMapSelect(props: MapProps) {
  const { onChange } = props;
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const handleSvgRegionClick = (e: React.MouseEvent<SVGElement>) => {
    const target = e.target as SVGElement;
    const regionElement = target.closest('.map-region');
    if (!regionElement) return;

    const regionId = regionElement.getAttribute('data-id');
    if (regionId) onChange(regionId);

    document.querySelectorAll('.map-region').forEach((el) => {
      el.classList.toggle('active', el === regionElement);
    });
  };

  return (
    <div className="region-map-select">
      <svg onClick={handleSvgRegionClick} className="map-svg" height="480" version="1.1" width="800"
           xmlns="https://www.w3.org/2000/svg">
        <g className="map-region" data-id="3">
          <path
            d="M173.5 445.61L179.5 447.36 185.616 452.692 184.616 455.789 188.963 462.31 196.57 463.669 198.743 470.461 203.905 477.253 206.079 483.502 211.784 483.773 221.565 493.01 226.727 494.911 232.433 501.704 228.358 506.051 237.324 515.017H247.648L257.972 516.918 266.394 521.809 278.348 511.756 280.793 505.508 287.042 510.942 293.834 512.3 299.268 510.942 308.234 516.919 311.766 511.214 310.68 505.78 311.767 496.543 319.374 490.295 322.091 482.416 329.155 482.687 338.936 485.675 340.566 482.687 338.121 478.34 339.479 472.362 341.924 465.026 341.109 455.517 340.566 445.464 343.554 439.759 352.52 442.747 360.127 444.378 362.572 452.528 374.255 449.811 377.515 445.463 385.394 445.735 397.349 451.983 401.424 453.885 405.501 459.857 408.751 452.857 404.751 446.607 400.251 442.607 405.751 436.857 406.751 430.607 412.001 429.607 412.751 425.107 405.501 419.357 398.501 420.857 390.001 420.607 383.501 414.107 384.501 408.607 381.251 404.107 374.001 405.357 366.001 402.357 361.001 405.107 355.501 400.107 352.751 395.107 346.501 391.607 341.751 394.357 336.251 389.857 333.501 384.857 334.751 380.357 332.001 374.607V366.857L335.001 363.107 335.251 356.107 333.501 349.607 330.251 344.857 328.001 339.357 323.751 339.857 316.001 333.357 310.751 337.107 312.251 344.857 305.751 348.357 302.251 352.357 295.001 349.357 287.001 347.357 282.501 348.107 276.001 345.107 269.751 348.857C269.751 348.857 266.103 348.622 265.501 348.607S261.501 343.607 261.501 343.607H255.501L252.501 347.357 239.001 348.857 235.251 344.857H230.501L227.751 349.607 220.751 353.107 216.251 350.857 202.501 350.357 199.751 354.357 201.251 359.857V364.357L200.501 372.107 204.001 377.857 199.501 384.857 196.001 387.607V391.357L193.001 394.107 196.751 398.357 192.001 400.857 195.001 406.857 192.501 412.857 186.501 415.107 185.001 417.857 180.501 416.357 179.251 426.107 181.751 430.107 180.501 433.607 175.251 435.857 173.576 441.832 173.5 445.61Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="258.125" y="357.582">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Jihočeský</tspan>
          </text>
        </g>
        <g className="map-region" data-id="4">
          <path
            d="M151.027 246.771L147.637 255.059 141.986 256.566V265.042L134.452 259.391 126.541 258.449 111.472 268.243V273.894L107.611 277.755 101.301 274.648 98.099 276.155 91.883 272.387 84.349 275.589 78.981 280.957 73.99 276.53 69.469 280.298 62.356 280.007 54.477 291.961 54 299.11 45.784 306.633 52.033 313.696 59.64 318.858 59.097 326.737 64.259 332.715 63.987 340.05 72.138 345.756 71.323 354.721 72.681 360.969 79.202 364.501 84.908 370.479 89.255 377.814 97.134 379.988 99.851 378.087 106.914 379.445 115.88 385.966 116.967 393.301 124.846 401.18V404.984L132.181 410.69 133.539 416.395 138.43 419.927H145.222L151.743 426.448 157.72 435.141 158.535 444.651 169.674 451.986 173.501 445.611 173.576 441.836 175.251 435.861 180.501 433.611 181.751 430.111 179.251 426.111 180.501 416.361 185.001 417.861 186.501 415.111 192.501 412.861 195.001 406.861 192.001 400.861 196.751 398.361 193.001 394.111 196.001 391.361V387.611L199.501 384.861 204.001 377.861 200.501 372.111 201.251 364.361V359.861L199.751 354.361 202.501 350.361 199.251 344.861 199.501 338.861 200.751 334.361 197.501 331.861 194.001 327.361 195.751 322.361 191.751 318.111 197.001 314.361H202.501L207.251 308.611 205.001 304.111 207.501 299.861 205.251 293.861 210.001 289.111 208.751 285.361 209.251 278.861 205.001 276.111 200.001 275.111 199.751 271.111 194.751 272.111C194.751 272.111 189.695 265.405 189.501 265.361S185.001 267.111 185.001 267.111L180.501 264.861 176.501 262.611 175.751 258.361 169.001 257.861 165.001 260.361 161.501 257.111 164.251 253.611 161.956 250.727 155.175 246.771 151.027 246.771Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="112.892" y="269.378">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Plzeňský</tspan>
          </text>
        </g>
        <g className="map-region" data-id="5">
          <path
            d="M69.47 280.299L62.357 280.008V274.846L57.195 272.401 57.466 266.424 42.251 256.1 32.742 251.21 28.666 243.874 24.591 239.255 26.493 230.833 20.244 221.324 15.761 216.841 18.886 210.728 16.17 203.936H24.864L27.037 206.11V212.087H31.656L34.237 214.668 32.742 218.879 35.459 221.596V228.388L39.535 232.464 41.437 222.683C41.437 222.683 40.079 219.422 41.437 218.064S46.871 212.63 46.871 212.63L49.316 204.479 59.912 198.774V194.97L63.308 191.574 71.051 190.351 80.832 188.721 84.092 191.981 89.526 185.189 99.579 182.472 110.175 190.351 115.019 195.195H125.036L129.933 197.045C129.933 197.045 129.676 201.26 129.933 201.754S140.669 200.624 140.669 200.624L145.378 205.333 140.763 209.948 143.306 214.751 141.611 220.966 145.755 225.11 144.06 228.689 148.768 235.093 144.059 239.801 151.028 246.771 147.638 255.059 141.987 256.566V265.042L134.453 259.391 126.542 258.449 111.473 268.243V273.894L107.612 277.755 101.302 274.648 98.1 276.155 91.884 272.387 84.35 275.589 78.982 280.957 73.991 276.53 69.47 280.299Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="75.394" y="166.714">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Karlovarský</tspan>
          </text>
        </g>
        <g className="map-region" data-id="6">
          <path
            d="M110.174 190.351L119.683 185.189 119.412 177.854 122.672 174.593 132.453 172.963 140.604 174.05 143.864 168.073V163.726L146.581 158.836H149.841L151.471 163.726 155.546 162.368V156.391L158.128 153.809 159.622 149.87H163.425L165.055 155.032 169.402 157.749 177.824 151.772 178.367 141.72 182.306 137.781 186.789 140.09 192.223 135.2 195.755 138.732 202.276 135.2 209.611 134.385 211.241 138.189H214.23L219.12 133.299V125.692L225.369 124.605 229.716 120.258 235.421 123.79 244.115 119.171 247.647 115.639 254.982 116.182 258.514 109.119H263.404L265.306 111.292 275.087 107.76 276.174 100.968 268.023 98.251V93.089L259.873 91.459 262.861 86.025 265.578 78.961 273.729 82.765 275.631 84.667H280.521L288.128 81.95 293.018 86.84 297.909 91.459 298.18 97.436 294.105 104.228 303.342 102.598 301.712 112.107V116.454L295.31 118.69 294.368 126.036 287.964 123.587 280.807 122.645 282.314 128.672 277.511 133.475V137.336L273.32 141.527C273.32 141.527 269.25 147.213 269.318 148.261S272.708 153.723 272.708 153.723V158.809L279.867 170.672 284.951 176.889 282.691 179.904 283.633 187.062H278.924L277.417 191.583H272.52L274.215 200.059 270.636 203.638 262.537 202.885 258.204 207.218H241.817L233.906 203.639 227.502 207.029V211.55L222.322 216.73H216.389L214.364 218.754 214.506 222.663 208.855 219.272 202.64 225.487 193.975 225.299 185.687 230.385 178.341 230.761 172.69 236.035 171.56 242.627 165.344 245.264 161.954 250.726 155.173 246.77 151.026 246.771 144.057 239.801 148.766 235.093 144.058 228.689 145.753 225.11 141.609 220.966 143.304 214.751 140.761 209.948 145.376 205.333 140.667 200.624 129.931 201.754V197.045L125.034 195.195H115.017L110.174 190.351Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="191.758" y="114.843">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Ústecký</tspan>
          </text>
        </g>
        <g className="map-region" data-id="8">
          <path
            d="M401.151 127.863L407.197 134.697 405.314 142.608 408.515 150.331 407.009 154.475 410.776 158.242 407.762 164.269 413.413 169.92V173.499L403.807 175.571 399.286 171.05 393.447 174.817V179.902L388.55 182.727 385.348 177.83 374.423 174.063 367.266 178.772 359.355 173.686 354.27 171.426V167.659L347.159 164.033 343.91 160.784H338.353L334.115 156.546 329.971 163.703 323.378 171.049 321.118 168.789 315.468 169.73V174.439L307.557 180.843 298.139 183.103 295.879 176.322 284.951 176.887 279.867 170.67 272.708 158.807V153.721L269.318 148.259 273.32 141.525 277.511 137.334V133.473L282.314 128.67 280.807 122.643 287.964 123.585 294.368 126.034 295.31 118.688 301.712 116.452 318.557 121.614 323.991 113.735 334.043 113.192C334.043 113.192 340.657 114.42 341.107 114.007S342.737 104.498 342.737 104.498L344.91 95.804 340.291 91.185 344.638 86.838H351.973L355.777 90.37 361.754 87.11 365.014 92.816 369.904 90.643 375.338 97.164 372.893 102.598 375.61 111.02 380.364 115.774 384.847 120.257 385.39 128.136 387.156 129.902 393.269 124.332 401.151 127.863Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="326.365" y="78.97">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Liberecký</tspan>
          </text>
        </g>
        <g className="map-region" data-id="7">
          <path
            d="M401.151 127.863L409.302 128.406 418.267 132.481 420.984 135.198 427.233 136.285 434.025 132.481 436.742 138.458 440.546 146.88H445.437L452.5 144.163 456.848 152.313 456.304 157.475 463.097 152.585 467.715 147.966 475.865 153.671 479.941 153.943 481.299 147.966H492.438L506.294 161.55 501.675 165.626 500.588 173.505 491.895 176.765 479.397 186.546 480.484 191.98 487.547 200.13 493.525 197.142 496.921 200.538V204.749L500.792 208.621 505.75 208.01 511.456 218.063 519.335 224.312 520.693 234.365 523.521 240.169 515.126 236.41H511.171V241.872L501.189 244.697 495.915 249.971 494.22 257.128H484.802L478.21 259.011 473.972 254.773 466.72 250.535 462.576 246.391H458.055V239.8L454.664 236.41 446.941 236.222 440.537 239.424 437.241 242.72C437.241 242.72 434.093 241.621 433.757 241.495S433.757 235.844 433.757 235.844H428.86L423.774 242.813H414.169L408.895 239.799 398.959 248.403 390.248 250.347 392.32 243.566 384.221 239.234 388.177 232.265 386.105 227.744 387.235 222.094 385.917 216.066 382.903 213.052 377.441 216.631 368.588 215.501V210.227L363.785 205.424 357.475 204.2 356.157 199.491 360.96 194.688 358.041 186.683 359.736 181.974 356.911 177.453 359.357 173.685 367.268 178.771 374.425 174.062 385.35 177.829 388.552 182.726 393.449 179.901V174.816L399.288 171.049 403.809 175.57C403.809 175.57 413.317 173.605 413.415 173.498S413.415 169.919 413.415 169.919L407.764 164.268 410.778 158.241 407.011 154.474 408.517 150.33 405.316 142.607 407.199 134.696 401.151 127.863Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="411.838" y="138.436">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Královéhradecký</tspan>
          </text>
        </g>
        <g className="map-region" data-id="9">
          <path
            d="M555.742 226.757L554 234.944 549.333 243.944 547.833 252.611 550.333 256.778 540.333 264.945V270.612L542.833 276.445 543.833 283.779 546.25 286.196 540.667 289.945 544.833 298.112 549.333 306.945V311.445L555 313.945V321.445L549.833 326.612V332.279L546.667 336.779 540.5 330.612H522L518.333 336.612H506L502.75 339.862 495.5 332.612 489.667 332.445 482.5 323.945 468.5 320.779 466 314.945 459.333 315.112V311.445L452.5 315.779V321.445L444.833 318.779 441 316.779V311.779L435.833 309.112 431.833 308.279 427.667 303.945 420.667 299.445 411 299.61 402 292.61 400 284.444 403.667 280.777 404.167 273.11 397.334 269.777 397.167 265.11 391.667 263.277 386 259.944 386.833 255.277 390.248 250.347 398.959 248.403 408.895 239.799 414.169 242.813C414.169 242.813 423.298 243.143 423.774 242.813S428.86 235.844 428.86 235.844H433.757V241.495L437.241 242.72 440.537 239.424 446.941 236.222 454.664 236.41 458.055 239.8V246.393H462.576L466.72 250.537 473.972 254.775 478.21 259.013 484.802 257.13H494.22L495.915 249.973 501.189 244.699 511.171 241.874V236.412H515.126L523.521 240.171 535.908 247.136 542.971 240.073 546.639 236.405 546.503 230.02 555.742 226.757Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="460.871" y="218.309">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Pardubický</tspan>
          </text>
        </g>
        <g className="map-region" data-id="12">
          <path
            d="M617.687 214.259V224.61H612.75L608.25 229.11 598.25 235.61V242.61L594.75 246.11 597.5 251.11 591.5 259.61 589.75 267.36 593.875 271.485 590 277.86 588.75 285.36 592.375 288.985H597V294.36H603.25L607.25 298.36 614.5 296.36 620.5 305.11H625.5L629.75 307.36 634.75 303.86 639 308.11 644.5 305.11 652 309.11 650.25 317.61H658L660.75 325.11 666.75 327.11 671.875 332.235 671.25 337.36H676.75L679.5 342.86 675.375 346.985 671.25 345.61 664.5 350.11V357.11L659.125 362.485 653.25 355.86 645.5 358.61 647.75 365.36 641 367.36 636 365.86 631.875 369.985 629 375.11 625.125 371.235 618.5 371.61 616.5 366.86 612.5 370.36 614.75 378.11 611 381.86 608.75 385.36 599.25 386.86 593.375 392.735 589.5 386.11V382.36L586.375 379.235H579.5L578.5 373.86V368.86L572.5 365.11V360.61L568.625 356.735 566.25 351.61H560.75L557 355.86 561 359.86 565.125 363.985 560.75 370.36 557.75 373.36 550.25 367.86 553.75 364.36 549.25 358.36V351.86L554.25 346.61 548.5 344.86 543.75 344.61 546.667 336.777 549.833 332.277V326.61L555 321.443V313.943L549.333 311.443V306.943L544.833 298.11 540.667 289.943 546.25 286.194 543.833 283.777 542.833 276.443 540.333 270.61V264.943C540.333 264.943 550.221 257.032 550.333 256.776S547.833 252.609 547.833 252.609L549.333 243.942 554 234.942 555.742 226.755 564.435 222.679H571.228L571.499 214.257 567.016 209.774 562.534 208.008 559.273 196.325 552.21 192.521 556.014 185.186 564.436 187.359 570.685 188.717 581.009 191.706 585.22 195.917 592.42 193.607 593.507 200.671 599.212 205.018H607.906L610.079 212.625 617.687 214.259Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="594.916" y="274.324">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Olomoucký</tspan>
          </text>
        </g>
        <g className="map-region" data-id="14">
          <path
            d="M737.5 365.046L731.75 362.36 730.5 356.61 723.5 352.11 723 347.61 717.5 349.86H712.25L706.25 345.61 698.25 343.86 690.25 347.11 685.25 342.86H679.5L675.375 346.985 671.25 345.61 664.5 350.11V357.11C664.5 357.11 660.164 361.736 659.125 362.485S653.25 355.86 653.25 355.86L645.5 358.61 647.75 365.36 641 367.36 636 365.86 631.875 369.985 629 375.11 625.125 371.235 618.5 371.61 616.5 366.86 612.5 370.36 614.75 378.11 611 381.86 608.75 385.36 599.25 386.86 593.375 392.735 589.75 397.61 592.75 402.86 591.25 408.11 598 408.86 597.25 413.86 592.75 416.86 587.75 422.11 591.5 426.86 599.75 423.61 602.75 426.86 602 432.61 608.25 436.11 616.5 437.11 616.25 442.86 621.5 442.61 627 447.61 633.5 445.11 639.25 448.61 639.5 452.61 645.75 454.11 649.5 459.61 651.646 462.31H656.537L663.601 457.963 668.491 449.54 678.544 448.997 680.31 435.548 684.249 431.609 697.29 430.522 704.083 420.742V409.06L707.614 399.007V391.944L713.048 383.522 720.384 381.62 727.176 378.088 733.154 375.915 737.5 365.046Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="640.625" y="338.585">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Zlínský</tspan>
          </text>
        </g>
        <g className="map-region" data-id="2">
          <path
            d="m389.167 203.11-6.833-3.333-0.167-4.667-5.5-1.833-5.667-3.333 0.833-4.667 3.415-4.93 2.072-6.781-8.099-4.332 3.956-6.969-2.072-4.521 1.13-5.65-1.318-6.028-3.014-3.014-5.462 3.579-8.853-1.13 0-5.274-4.803-4.803-6.31-1.224-1.318-4.709 4.803-4.803-2.919-8.005 1.695-4.709-2.825-4.521 2.446-3.768-5.085-2.26 0-3.767-7.111-3.626-3.249-3.249-5.557 0-4.238-4.238-4.144 7.157-6.593 7.346-2.26-2.26-5.65 0.941 0 4.709-7.911 6.404-9.418 2.26-2.26-6.781-10.928 0.565-2.26 3.015 0.942 7.158-4.709 0-1.507 4.521-4.897 0 1.695 8.476-3.579 3.579-8.099-0.753-4.333 4.333-16.387 0-7.911-3.579-6.404 3.39 0 4.521-5.18 5.18-5.933 0-2.025 2.024 0.142 3.909-5.651-3.391-6.215 6.215-8.665-0.188-8.288 5.086-7.346 0.376-5.651 5.274-1.13 6.592-6.216 2.637-3.39 5.462 2.295 2.884-2.75 3.5 3.5 3.25 4-2.5 6.75 0.5 0.75 4.25 4 2.25 4.5 2.25 4.5-1.75 5.25 6.75 5-1 0.25 4 5 1 4.25 2.75-0.5 6.5 1.25 3.75-4.75 4.75 2.25 6-2.5 4.25 2.25 4.5-4.75 5.75-5.501 0-5.25 3.75 4 4.25-1.75 5 3.5 4.5 3.25 2.5-1.25 4.5-0.25 6 3.25 5.5 13.75 0.5 4.5 2.25 7-3.5 2.75-4.75 4.75 0 3.75 4 13.5-1.5 3-3.75 6 0 4 5 4.25 0.25 6.25-3.75 6.5 3 4.5-0.75 8 2 7.25 3 3.5-4 6.5-3.5-1.5-7.75 5.25-3.75 7.75 6.5 4.25-0.5 2.25 5.5 3.25 4.75 2.75-2.75 0.25-5.25 5.5-5.5 8.25 1.25 6.5-0.25 4.5 0.75 2.25-4 3.75 1.75 4.75-3.25-0.25-5.25-7.75-3.75 0.25-5.75 3.75-3.5 0.75-4 3-1.75 4 1 3.25-3 5.75 0 2-4.25 5.75 0.25-0.5-6 4-3.25 6-0.5-2-8.166 3.667-3.667z"></path>
          <text className="map-region__label" x="267.834" y="248.64">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Středočeský</tspan>
          </text>
        </g>
        <g className="map-region" data-id="1">
          <path
            d="m222.421 171.917 11.83-5.915 4.507 2.535c0 0 7.046 1.36 7.887 0.563 0.842-0.798-1.972-7.323-1.972-7.323l5.07-3.098 7.042 1.408 7.887-4.225 4.225-5.633 9.295 0.282 2.253 3.943 5.352 1.69 1.69 2.535 6.197-1.408-1.69 6.197 8.168 1.972 3.662 5.915h5.352l5.07 6.478-0.845 5.07-8.168 0.845-5.633 3.943 3.943 3.38 0.845 8.732-5.915 5.352-6.76-4.507-8.736-1.127-4.225 4.225-7.887 1.972-4.507 6.478-6.197 0.282-5.915 2.817-1.69 4.507-7.605 1.69-5.633-6.197 2.817-9.013-7.887-3.943 2.253-5.07-6.478-4.225-5.07-7.323 3.943-5.915-6.476-7.891z"></path>
          <text className="map-region__label" x="267.334" y="189.861">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Praha</tspan>
          </text>
        </g>
        <g className="map-region" data-id="13">
          <path
            d="M617.687 214.259V224.61H612.75L608.25 229.11 598.25 235.61V242.61L594.75 246.11 597.5 251.11 591.5 259.61 589.75 267.36 593.875 271.485 590 277.86 588.75 285.36 592.375 288.985H597V294.36H603.25L607.25 298.36 614.5 296.36 620.5 305.11H625.5L629.75 307.36 634.75 303.86 639 308.11 644.5 305.11 652 309.11 650.25 317.61H658L660.75 325.11 666.75 327.11 671.875 332.235 671.25 337.36H676.75L679.5 342.86H685.25L690.25 347.11 698.25 343.86 706.25 345.61 712.25 349.86H717.5L723 347.61 723.5 352.11 730.5 356.61 731.75 362.36 737.5 365.046 742.119 363.416 750.813 352.005 750.269 345.484 756.247 342.767 761.138 345.212 769.288 343.582 776.08 345.755 784.774 341.68 786.132 335.159 781.241 321.847 778.253 312.61H771.189L768.201 309.078 759.235 306.361 757.877 299.84 751.899 286.799 755.16 279.736 752.443 278.649 749.726 271.042 744.292 275.117 733.696 269.14 724.458 267.782 721.198 273.488 716.307 265.338 710.058 262.349 707.07 258.545 701.636 262.077 696.202 259.632 696.609 252.975 692.127 248.493 685.606 249.58 682.345 258.002C682.345 258.002 676.811 263.939 676.096 264.251S670.255 264.115 670.255 264.115L664.686 258.546 658.98 256.644 655.992 247.679 650.83 240.343 644.988 241.023 639.419 235.453V230.834L649.2 227.845 656.943 224.041V219.558L651.917 214.532 653.004 209.098 647.57 203.664 644.852 209.098 640.777 213.173 627.193 212.086 617.687 214.259Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="657.44" y="221.355">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Moravskoslezský</tspan>
          </text>
        </g>
        <g className="map-region" data-id="10">
          <path
            d="M502.75 339.86L495.5 332.61 489.667 332.443 482.5 323.943 468.5 320.777 466 314.943 459.333 315.11V311.443L452.5 315.777C452.5 315.777 452.729 321.255 452.5 321.443S444.833 318.777 444.833 318.777L441 316.777V311.777L435.833 309.11 431.833 308.277 427.667 303.943 420.667 299.443 411 299.61 402 292.61 396 293.11 392 296.36 392.5 302.36 386.75 302.11 384.75 306.36H379L375.75 309.36 371.75 308.36 368.75 310.11 368 314.11 364.25 317.61 364 323.36 371.75 327.11C371.75 327.11 372.032 331.726 372 332.36S367.25 335.61 367.25 335.61L363.5 333.86 361.25 337.86 356.75 337.11 350.25 337.36 342 336.11 336.5 341.61 336.25 346.86 333.5 349.61 335.25 356.11 335 363.11 332 366.86V374.61L334.75 380.36 333.5 384.86 336.25 389.86 341.75 394.36 346.5 391.61 352.75 395.11 355.5 400.11 361 405.11 366 402.36 374 405.36 381.25 404.11 384.5 408.61 383.5 414.11 390 420.61 398.5 420.86 405.5 419.36 412.75 425.11 412 429.61 406.75 430.61 405.75 436.86 400.25 442.61 404.75 446.61 408.75 452.86 413.25 450.61 417.75 453.86 423.25 448.11 429 452.36 432 446.61 435.5 445.61 438.75 441.11H444.75L447 435.86 454 432.86 460.25 437.11 464.5 434.61 470.25 436.36 475.75 433.61 478.75 428.86 483.5 430.11 485.75 424.61 489.5 423.61 491.25 420.36 486.75 417.11 485.25 412.11 491 408.61 485.75 403.36 487 398.86 491 395.61 487.25 390.86 491.75 387.86 493.5 383.86 503.25 379.36 502.75 370.36 500.75 365.36 503 360.61 500.25 354.11 505.25 351.11 506.75 348.11 501.5 344.61 502.75 339.86Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="405.375" y="303.235">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Vysočina</tspan>
          </text>
        </g>
        <g className="map-region" data-id="11">
          <path
            d="M546.667 336.777L540.5 330.61H522L518.333 336.61H506L502.75 339.86 501.5 344.61 506.75 348.11 505.25 351.11 500.25 354.11 503 360.61 500.75 365.36 502.75 370.36 503.25 379.36 493.5 383.86 491.75 387.86 487.25 390.86 491 395.61 487 398.86 485.75 403.36 491 408.61 485.25 412.11 486.75 417.11C486.75 417.11 491.12 419.697 491.25 420.36S489.5 423.61 489.5 423.61L485.75 424.61 483.5 430.11 478.75 428.86 475.75 433.61 470.25 436.36 464.5 434.61 460.25 437.11 454 432.86 447 435.86 444.75 441.11H438.75L435.5 445.61 432 446.61 429 452.36 423.25 448.11 417.75 453.86 413.25 450.61 408.75 452.86 405.5 459.86 409.03 460.409 416.093 461.223 424.243 467.201 432.394 468.016 434.295 464.755 442.445 465.57 454.4 473.992 455.758 478.34 471.515 487.033 490.262 486.762 504.661 489.479 510.095 483.23 513.083 475.08 523.136 474.537 527.483 479.155 537.536 480.785 538.894 487.578 544.056 485.947 553.022 491.382 561.172 489.208 566.606 492.74 569.323 506.324 573.671 505.781 576.931 494.37 579.105 486.491 588.071 475.351 590.244 467.744 593.505 466.386 598.395 461.496H603.557L613.61 465.843 622.304 471.005 630.997 465.3 638.333 470.19 644.854 468.56 651.646 462.311 649.5 459.611 645.75 454.111 639.5 452.611 639.25 448.611 633.5 445.111 627 447.611 621.5 442.611 616.25 442.861 616.5 437.111 608.25 436.111 602 432.611 602.75 426.861 599.75 423.611 591.5 426.861 587.75 422.111 592.75 416.861 597.25 413.861 598 408.861 591.25 408.111 592.75 402.861 589.75 397.611 593.375 392.736 589.5 386.111V382.361L586.375 379.236H579.5L578.5 373.861V368.861L572.5 365.111V360.611L568.625 356.736 566.25 351.611H560.75L557 355.861 561 359.861 565.125 363.986 560.75 370.361 557.75 373.361 550.25 367.861 553.75 364.361 549.25 358.361V351.861L554.25 346.611 548.5 344.861 543.75 344.611 546.667 336.777Z"
            transform="matrix(1,0,0,1,-15,-70)"></path>
          <text className="map-region__label" x="519.572" y="383.467">
            <tspan className="styles_tspan__iLnLJ" dy="0"> Jihomoravský</tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}

export default RegionMapSelect;