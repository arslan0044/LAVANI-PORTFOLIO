import { motion } from "framer-motion";
import React from "react";

function Section7() {
  return (
    <div >
      <div className="">
        <motion.svg
          initial={{ x: 300, y: 200 }}
          width="1789"
          height="632"
          viewBox="0 0 1789 632"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1976.35 613.817C1975.41 617.351 1976.99 624.083 1972.64 623.4C1923.04 615.599 1874.64 621.405 1825.42 618.398C1795.39 616.567 1765.44 616.272 1735.32 614.057C1689.94 610.702 1644.67 609.164 1599.32 606.201C1584.75 605.252 1569.55 599.189 1555.5 600.947C1537.4 603.215 1518.61 595.856 1500.78 600.463C1491.48 602.862 1480.91 599.446 1471.34 597.527C1451.45 593.559 1432.7 601.381 1412.21 592.376C1400.71 587.325 1388.24 590.782 1376.44 591.975C1360.38 593.566 1344.18 592.841 1328.33 589.822C1314.56 587.247 1301.56 594.256 1287.32 588.186C1253.21 573.677 1221.69 592.722 1187.54 582.52C1178.01 579.671 1167.07 583.873 1156.58 583.288C1154.82 583.188 1152.86 584.85 1151.43 583.794C1131.83 569.309 1115.58 581.717 1098.59 586.831C1090.67 589.223 1083.63 581.809 1075.94 580.717C1043.59 576.149 1011.64 576.713 979.476 574.164C970.631 573.465 960.471 569.364 953.801 571.238C940.248 575.014 925.893 568.897 912.907 574.158C903.63 577.912 865.219 574.259 854.738 569.739C852.458 568.756 850.01 567.483 847.86 567.749C820.887 571.122 792.524 560.568 766.126 562.635C743.736 564.388 720.49 550.984 698.733 560.918C687.292 566.139 673.218 554.689 660.066 554.332C636.87 553.686 613.662 553.648 590.303 551.741C577.384 550.692 565.248 546.178 552.733 543.512C535.766 540.047 518.374 539.155 501.142 540.867C470.02 543.687 438.184 537.669 406.808 536.194C373.431 534.614 340.236 534.015 307.015 533.71C298.394 533.64 289.766 533.585 281.365 534.697C266.431 536.683 255.493 518.682 242.647 510.374L241.949 510.291L243.021 510.453C240.204 521.117 251.743 520.277 250.946 529.389C220.899 523.725 191.031 533.613 159.91 510.194C165.945 502.547 172.946 508.251 178.826 506.765C170.84 491.493 166.104 486.736 157.876 494.136C148.992 502.145 145.522 494.71 141.095 484.299L141.269 484.527C140.763 484.022 140.188 483.046 139.787 483.111C138.9 483.415 138.07 483.865 137.33 484.441L137.415 484.025C127.74 474.512 127.818 465.631 135.391 457.231C137.651 457.438 139.907 457.632 142.166 457.839L142.843 458.339L141.851 457.693C141.427 453.474 139.513 451.578 137.209 452.094C135.561 452.469 135.293 455.161 135.794 457.84C131.615 449.789 128.746 441.231 121.727 435.585C115.674 430.728 104.992 421.245 115.235 407.777C117.213 405.165 111.168 394.245 106.357 392.843C103.957 392.143 101.331 398.054 99.0313 391.766C97.5647 387.722 101.421 386.725 101.947 384.231C102.993 379.285 88.1634 347.613 85.3867 348.908C70.163 355.936 72.6943 337.796 70.3611 326.113C69.8505 323.586 68.4836 321.239 67.5066 318.818L67.1915 319.293C69.8176 308.364 76.5048 304.027 81.8507 297.228C85.4182 292.7 94.8116 294.281 91.6211 280.856C89.3276 271.185 83.0623 271.823 78.1646 270.263C76.4595 269.806 74.8783 268.974 73.5371 267.826C72.1958 266.679 71.1283 265.246 70.4132 263.632C66.4638 255.96 69.7712 252.375 72.4213 248.342C74.8133 254.914 77.5487 260.045 81.6625 253.432C83.8228 249.956 83.3072 243.655 80.9805 241.538C75.6671 236.701 76.3477 248.966 72.2119 248.836C72.642 238.994 77.3782 226.115 63.6438 226.214L63.8013 226.499C62.3436 224.447 60.8849 222.389 59.4245 220.327L59.7928 220.75C65.2799 212.702 63.3529 199.661 66.0229 189.671C67.7751 183.145 64.8578 175.905 61.6171 173.016C56.5142 168.455 59.9607 179.51 56.9333 181.225C52.2896 183.859 49.2384 176.494 45.2972 176.202L45.6298 176.687C50.7492 162.245 49.3127 150.075 37.5445 140.159C31.7097 135.245 25.4087 130.657 24.4831 117.861C24.2447 114.539 21.5806 108.695 17.6924 105.284C5.86044 94.9519 0.106433 79.5091 1.23293 60.0598L0.928586 60.6283C2.43407 63.7301 3.93357 67.5623 6.56099 67.3949C7.99612 67.2942 10.3407 65.4235 9.07939 62.2051C6.86751 56.5594 1.94544 49.6547 5.61508 45.327C11.2526 38.6914 15.0087 27.3503 21.5365 24.5146C31.6881 20.0964 40.4686 4.51886 54.5665 19.6743C57.8726 23.2237 64.573 22.5539 68.3416 20.061C80.8354 11.7769 94.9244 13.0245 108.349 10.1451C121.039 7.41647 133.199 5.91888 146.397 9.62142C152.553 11.3518 157.807 10.2479 163.863 5.66203C171.279 0.0438975 181.605 -1.67699 192.088 2.43015C206.246 7.96531 220.518 11.1984 233.528 2.84156C240.967 -1.94373 249.738 0.365034 257.657 2.77014C276.181 8.36541 293.903 8.54932 311.111 3.06008C316.233 1.41861 321.302 0.171419 326.673 1.98594C349.74 9.7768 371.858 3.64868 394.189 6.89347C414.34 9.82128 432.67 -8.83812 453.861 10.2349C455.981 12.1464 459.397 9.77811 462.238 9.56931C476.962 8.45322 490.793 5.62728 507.027 13.1245C520.44 19.3281 535.277 12.1553 549.856 13.2251C584.321 15.7207 618.598 15.4362 653.112 18.7749C677.244 21.108 701.269 23.1729 724.996 21.4754C731.005 21.0358 736.96 25.6237 742.171 28.324C753.932 34.4087 762.216 24.6477 772.072 23.6244C796.8 21.0721 821.927 33.2046 846.849 30.5047C863.15 28.7378 881.755 34.083 898.98 34.1292C921.172 34.1961 943.288 38.9035 965.566 43.1508C977.594 45.4449 988.545 33.351 1001.53 44.3937C1026.08 35.0573 1051.91 45.1827 1077.49 50.3827C1084.22 51.7539 1090.83 46.5389 1097.58 47.7418C1108.7 49.7329 1119.99 52.2376 1130.61 50.8887C1142.72 49.3609 1154.87 53.733 1166.91 54.2508C1171.22 54.4322 1175.11 57.7841 1179.06 60.6308C1181.23 62.188 1184.43 66.268 1185.56 63.3261C1194.69 39.6286 1211.23 60.4765 1223.83 57.5368C1237.07 54.468 1251.5 57.4921 1265.34 57.2623C1285.95 56.9106 1306.93 63.3476 1327.44 65.2709C1354.48 67.7945 1381.47 62.4803 1408.56 67.4539C1444.33 74.0264 1479.32 68.3802 1515.42 80.9494C1528.54 85.5046 1542.13 82.8217 1555.23 82.9275C1573.92 83.0768 1593.33 98.3124 1611.19 88.8588C1637.34 104.971 1663.74 97.4742 1690.44 111.461C1714.96 124.318 1740.77 130.444 1765.2 122.136C1767.37 121.398 1769.87 121.738 1772.24 122.143C1793.37 125.777 1813.84 124.173 1833.9 119.16C1837.19 118.341 1841.54 113.922 1843.78 118.751C1850.72 133.702 1862.17 124.675 1869.81 137.554C1874.52 145.49 1882.87 146.505 1888.55 143.518C1908.37 133.067 1928.79 145.413 1949.13 152.031C1951.46 152.788 1953.81 152.742 1956.15 153.07L1957.16 154.043L1955.92 153.5C1958.33 147.863 1961.64 146.848 1966.44 149.709C1978.59 156.941 1990.13 154.288 2001.65 152.062C2003.32 151.738 2005.27 150.148 2006.58 151.157C2023.4 164.187 2039.33 155.099 2055.74 157.862C2072.63 160.708 2089.78 163.436 2106.53 167.315C2135.17 173.94 2163.91 178.304 2192.14 181.558C2217.3 184.447 2242.36 193.116 2267.4 195.78C2284.81 197.646 2302.54 205.321 2320.11 209.492C2342.86 214.883 2365.46 224.688 2388.23 230.737C2400.67 234.036 2415.92 234.356 2428.14 249.63C2431.5 253.829 2434.99 251.983 2438.43 252.455C2445.52 253.427 2452.7 253.187 2459.3 260.781L2459.46 260.269C2457.27 275.773 2446.82 277.694 2440.41 286.24C2438.86 286.252 2437.3 286.266 2435.75 286.266C2436.03 287.214 2436.31 288.149 2436.59 289.097C2437.74 287.94 2438.89 286.796 2440.03 285.64C2449.59 302.831 2457.25 292.6 2465.27 287.633L2464.83 287.044C2463.8 294.352 2467.55 305.403 2469.05 306.388C2475.03 310.27 2483.08 314.628 2487.75 311.565C2496.56 305.769 2503.25 318.626 2503.69 322.954C2505.21 338.244 2516.02 341.517 2519.19 354.316C2521.65 364.27 2529 358.044 2533.82 362.058C2531.3 382.669 2513.81 382.138 2510.1 401.84C2509.23 406.463 2502.86 403.743 2499.18 404.692C2491.53 406.673 2481.68 398.979 2476.49 414.078C2474.05 421.149 2470.15 409.647 2467.18 405.688C2469.49 407.053 2471.66 407.524 2472.47 403.641C2472.61 402.995 2471.22 400.364 2470.7 400.356C2468.32 400.337 2466.4 401.413 2467.56 406.245C2465.1 406.118 2462.65 405.989 2460.21 405.859C2457.44 398.494 2455.18 399.882 2453.12 405.079L2452.66 406.131L2453.18 404.835C2455.6 405.011 2458.02 405.186 2460.44 405.358C2460.25 409.645 2466.11 416.271 2460.12 418.177C2442.33 423.833 2424.73 431.806 2404.89 419.003L2405.15 419.311C2403.78 417.486 2402.41 415.676 2401.05 413.854C2399.55 411.836 2398.06 409.817 2396.56 407.798C2395.41 403.831 2395.71 396.817 2390.71 401.128C2389.62 402.053 2386.7 400.409 2387.52 403.824C2388.54 408.161 2391.39 406.207 2393.47 406.75C2394.59 407.043 2395.7 407.183 2396.82 407.391C2398.29 409.441 2399.78 411.49 2401.25 413.539C2401.78 414.087 2402.15 414.771 2402.32 415.515C2402.48 416.259 2402.44 417.034 2402.19 417.755C2401.63 418.635 2401.06 419.503 2400.5 420.379C2398.43 425.275 2396.67 430.14 2391.18 425.985C2387.88 423.477 2383.25 422.715 2383.5 429.993C2383.7 436.194 2388.94 438.171 2391.69 438.367C2401.29 439.071 2411.21 448.121 2420.61 442.339C2422.95 440.908 2426.33 442.423 2428.39 447.121C2427.06 448.384 2426.97 449.061 2428.08 448.86C2428.13 448.129 2428.12 447.396 2428.05 446.667C2437.9 451.061 2447.73 456.71 2457.59 459.398C2463.82 461.087 2467.98 468.897 2467.67 473.19C2467.17 480.395 2461.07 480.397 2456.26 478.679C2451.02 476.799 2445.85 473.68 2440.61 471.703C2431.12 468.091 2429.9 472.383 2435.09 490.355C2433.57 490.471 2432.89 491.867 2433.85 493.303C2434.81 494.711 2435.7 493.617 2435.75 491.299C2441.47 492.483 2446.91 491.645 2452.98 495.274C2463.2 501.384 2473.65 499.67 2483.96 500.153C2486.23 500.261 2488.47 500.155 2490.74 500.318C2491.07 500.338 2491.47 501.358 2492.14 502.384C2490.21 504.888 2488.24 507.456 2486.27 510.023L2486.49 509.528C2484.86 511.522 2483.1 515.726 2481.62 515.189C2469.42 510.716 2465.53 520.75 2464.12 535.689C2463.87 536.178 2463.63 536.693 2463.38 537.195C2463.5 536.524 2463.63 535.841 2463.76 535.169C2466.1 535.387 2468.45 535.603 2470.8 535.821C2471.15 536.152 2471.5 536.483 2471.85 536.811C2471.4 536.653 2470.95 536.507 2470.49 536.347C2470.82 532.038 2471.92 525.199 2474.96 529.499C2480.7 537.593 2489.14 533.437 2494.3 547.925C2497.77 557.656 2508.16 546.357 2510.44 543.15C2516.67 534.449 2518.28 539.924 2521.76 547.701C2527.06 559.536 2518.11 553.688 2517.04 557.592C2513.34 571.136 2501.36 550.895 2497.62 564.336L2497.82 564.324C2488.68 566.597 2478.33 561.558 2469.98 568.596L2470.16 568.218C2462.17 576.669 2455.19 587.828 2442.22 578.062C2438.37 575.154 2433.46 578.582 2429.73 582.702C2424.78 588.187 2418.99 590.852 2412.09 584.604C2404.65 577.885 2402.43 589.204 2397.57 591.358L2397.44 592.385L2397.67 590.883C2400.76 593.528 2403.84 596.159 2407.52 599.307C2403.5 606.904 2397.67 603.681 2392.49 603.356L2392.81 603.375C2391.32 597.385 2390 591.391 2384.61 591.28C2378.48 591.166 2372.31 590.537 2366.16 590.138C2365.25 588.157 2364.33 586.178 2363.42 584.184C2363.09 584.828 2362.9 585.529 2362.85 586.247C2363.26 589.56 2364.67 590.235 2366.47 589.598C2363.99 595.756 2359.53 591.949 2355.02 590.214C2355.49 602.33 2363.45 605.578 2366.11 616.496C2356.31 611.284 2349.77 625.267 2339.97 616.44L2339.38 615.288L2340.07 616.185C2333.67 627.465 2324.29 620.105 2315.98 619.466C2315.32 615.169 2315.07 610.145 2310.87 610.716C2310.07 610.829 2309.01 612.643 2309.01 613.88C2309.05 620.428 2312.32 620.274 2315.15 620.865C2300.66 617.153 2288.63 631.807 2273.58 623.915C2271.48 623.101 2270.35 620.791 2269.56 617.933C2268.46 617.829 2268.34 616.549 2269.21 616.723C2271.57 617.213 2268.54 614.488 2269.64 617.933C2271.01 619.824 2272.38 621.721 2273.75 623.621C2274.02 627.61 2275.33 634.159 2270.57 630.768C2262.18 624.812 2253.68 625.777 2245.32 622.109L2244.68 621.368L2245.56 621.994C2244.46 623.678 2243.49 626.891 2242.26 626.829C2205.5 625.122 2169.95 633.572 2132.71 628.591C2115.55 626.306 2097.7 618.588 2080.99 624.775C2075.62 626.769 2071.69 623.573 2071.4 613.499L2071.97 612.563L2071.44 613.643C2062.62 627.701 2049.44 624.695 2037.48 625.426C2023.13 626.304 2008.51 625.105 1993.99 624.698C1988.34 624.545 1983.61 620.116 1979.4 613.774C1982.4 613.864 1984.96 612.667 1986.73 609.23C1988.88 607.356 1991.03 605.489 1993.19 603.631C1994.65 609.051 1995.68 607.572 1996.58 603.96C1998.98 604.058 2001.38 604.168 2003.79 604.264C2005.9 607.592 2007.92 611.226 2011.18 610.139C2012.59 612.338 2013.72 611.131 2014.87 610.303C2020.87 611.226 2022.45 605.57 2022.8 596.926C2015.35 596.395 2006.78 589.937 2003.49 604.79C2004.14 601.447 2003.53 596.714 2001.48 596.466C1998.88 596.156 1997.04 599.845 1996.91 604.486C1995.59 604.356 1994.27 604.228 1992.94 604.088C1987.37 597.638 1987.37 597.638 1987.11 609.784C1984.21 610.005 1981.12 609.684 1979.66 614.174C1978.48 614.183 1977.3 614.177 1976.12 614.189C1976.45 610.028 1976.35 605.926 1974.29 602.049L1975.32 602.372L1974.67 602.294C1972.55 604.425 1969.19 605.907 1970.35 610.955C1971.08 614.084 1974.12 614.525 1976.36 613.801M2014.62 302.2C2014.76 302.932 2014.97 303.65 2015.23 304.349C2015.38 304.676 2015.85 304.681 2016.18 304.837C2015.58 303.882 2014.98 302.94 2014.38 301.985L2013.58 301.261L2014.62 302.2ZM2321.88 609.425C2322.18 611.607 2322.51 611.97 2322.86 610.512C2322.44 610.307 2322.01 610.101 2321.59 609.909C2320.25 606.622 2323.51 609.331 2321.25 607.624C2319.96 606.638 2319.64 607.166 2320.37 609.086C2321.65 612.412 2319.65 607.63 2321.88 609.425ZM2097.01 533.226L2097.47 534.373L2096.7 533.835C2095.17 529.376 2093.95 528.61 2093.22 533.674C2092.62 535.15 2090.27 532.474 2090.5 535.905C2091.27 534.94 2092.03 533.985 2092.81 533.038C2094.21 533.095 2095.6 533.167 2097.01 533.226ZM166.951 410.092C166.698 407.983 167.687 407.912 167.777 409.626C167.951 413.166 169.01 409.153 166.843 410.125L163.779 415.956C162.461 415.805 161.131 415.646 159.816 415.49L159.327 414.25L160.116 414.895C161.346 418.807 162.48 419.246 163.513 415.512C164.662 413.708 165.81 411.891 166.96 410.087M1192.03 558.554C1192.53 560.684 1192.64 564.305 1194.63 560.596C1193.68 560.067 1192.73 559.522 1191.78 558.992L1191.2 557.704L1192.03 558.554ZM1617.5 585.715C1618.88 585.874 1620.26 586.043 1621.65 586.201L1622.05 584.9L1621.92 586.479C1620.36 586.384 1618.8 586.301 1617.24 586.22L1616.83 584.262L1617.5 585.715ZM1591.74 577.83C1591.99 579.073 1589 580.011 1591.97 581.497C1591.74 580.096 1591.53 578.709 1591.3 577.31C1593.98 578.192 1595.41 576.953 1594.95 572.532L1599.6 572.578C1602.49 573.036 1603.2 575.768 1603.05 579.426C1604.44 583.39 1606.1 586.874 1609.25 587.238C1609.45 587.253 1609.78 585.761 1609.67 585.026C1608.66 578.584 1605.36 580.916 1602.95 579.777C1601.74 577.44 1600.54 575.103 1599.34 572.767C1598.03 572.897 1596.73 573.027 1595.42 573.171C1594.2 574.715 1592.97 576.268 1591.75 577.831M457.235 511.128C457.294 509.44 458.196 509.58 458.109 510.835C457.866 514.304 459.652 510.726 457.343 510.969L457.02 512.241L457.235 511.128ZM2415.68 462.813C2415.25 464.669 2414.59 466.517 2416.15 468.482C2409.82 480.419 2397.23 466.057 2390.15 476.422C2396.45 483.872 2402.25 485.506 2408.43 482.161C2412.45 479.977 2416.84 477.489 2421.08 485.035C2416.76 486.452 2412.2 487.188 2407.92 495.153C2414.28 492.897 2424.05 505.515 2420.66 484.485C2426.41 480.646 2424.1 472.257 2423.6 464.878C2425.38 464.298 2428.58 464.39 2426.51 460.065C2424.93 456.757 2422.77 458.857 2421.96 462.212C2421.45 462.043 2420.89 462.06 2420.38 462.262C2419.88 462.463 2419.46 462.835 2419.2 463.313C2417.94 461.099 2416.81 461.923 2415.68 462.816M2348.73 470.228C2350.48 469.683 2350.83 468.981 2349.77 468.598C2349.61 468.534 2349.35 470.027 2349.14 470.81L2348.38 471.521L2348.73 470.228ZM1094.36 569.735C1094.75 570.332 1095.12 570.99 1095.53 571.527C1095.85 571.897 1096.2 572.238 1096.57 572.548C1095.73 571.778 1094.89 571.019 1094.05 570.248C1093.62 569.755 1093.18 569.276 1092.75 568.795C1093.29 569.116 1093.82 569.425 1094.36 569.734M2273 401.865C2272.75 400.056 2273.63 399.982 2273.72 401.45C2273.91 405.013 2274.98 400.71 2272.93 402.043C2272.19 402.891 2271.52 403.797 2270.93 404.754C2270.8 404.972 2271.23 405.96 2271.4 406.598C2271.93 405.023 2272.46 403.437 2273 401.862M2426.87 517.333C2428.03 516.998 2430.76 518.418 2428.27 514.036L2427.23 517.854C2424.77 519.68 2423.8 523.056 2423.66 527.249C2421.63 527.479 2419.59 527.696 2417.57 527.924C2416.8 525.365 2416.08 522.783 2415.26 520.248C2411.94 509.897 2406.78 510.447 2401.75 512.663C2400.59 513.176 2399.36 516.715 2399.69 518.603C2401.41 528.534 2406.48 527.687 2411.06 527.802C2413.37 527.848 2415.66 527.582 2417.95 527.451C2416.91 530.237 2414.55 533.475 2415.1 535.689C2416.31 540.621 2419.78 540.566 2422.47 540.001C2426.65 539.135 2428.12 535.746 2425.18 529.153C2428.31 526.62 2427.07 521.694 2426.88 517.332M1539.23 576.34L1539.57 575.23L1539.2 576.727C1536.72 576.44 1534.24 576.138 1531.75 575.839C1531.56 572.482 1531.86 568.423 1528.38 568.44C1527.57 568.432 1526.26 570.762 1526.45 571.701C1527.41 576.404 1529.74 576.053 1531.96 575.399C1534.68 581.73 1536.96 579.198 1539.23 576.337M295.184 508.389C295.48 509.06 295.773 509.717 296.079 510.373C295.713 509.674 295.344 508.963 294.987 508.263L294.245 507.473L295.184 508.389ZM1660.83 511.57C1657.85 504.658 1655.7 508.855 1653.4 511.062C1653.93 512.595 1653.76 512.765 1652.87 511.563C1653.11 511.269 1653.36 510.987 1653.6 510.709C1656.1 510.855 1658.61 510.999 1661.13 511.141C1661.49 512.157 1661.87 513.184 1662.24 514.198C1662.21 513.708 1662.31 513.029 1662.14 512.774C1661.75 512.321 1661.32 511.917 1660.84 511.57M1173.47 552.78C1174.32 554.073 1175.05 555.827 1176.03 556.571C1178.27 558.276 1181.56 559.07 1181.5 555.192C1181.42 550.724 1178.15 552.75 1176.31 552.311C1175.24 552.063 1174.19 552.943 1173.13 553.313L1172.11 549.484C1172.03 549.984 1172.03 550.495 1172.12 550.994C1172.51 551.63 1172.96 552.228 1173.47 552.779M213.251 509.299C214.825 509.298 216.401 509.305 217.965 509.299C219.164 517.794 221.489 522.978 227.448 518.781C228.97 517.702 230.763 516.749 229.818 513.73C226.975 504.551 222.905 510.992 219.397 509.858C218.832 509.744 218.255 509.699 217.679 509.725C216.319 509.741 214.954 509.773 213.579 509.808C211.91 509.843 210.211 509.775 208.549 509.934C206.172 510.163 203.734 511.97 205.225 515.804C207.158 520.775 208.914 516.309 210.311 514.786C211.542 513.448 212.288 511.173 213.249 509.296M2501.93 353.818C2499.55 342.242 2496.08 338.453 2490.77 347.728C2489.09 347.737 2487.41 347.848 2485.74 348.059C2482.97 348.568 2479.62 349.428 2481.81 355.324C2483.01 358.541 2486.02 357.915 2487.78 355.634C2488.79 354.503 2489.55 353.176 2490.02 351.737C2490.48 350.297 2490.65 348.776 2490.5 347.27C2494.64 347.606 2498.49 350.252 2502.27 353.407C2501.12 356.119 2500.16 359.246 2503.33 361.01C2504.24 361.519 2506.67 359.026 2506.62 357.634C2506.44 352.721 2503.85 353.981 2501.94 353.816M2314.45 479.63C2314.6 475.3 2314.35 471.1 2311.65 467.666C2309.71 465.197 2307.35 462.66 2305.57 464.848C2304.94 465.615 2306.7 470.609 2307.37 473.666L2306.44 475.194L2307.01 473.148L2314.75 479.189C2314.56 480.311 2314.63 481.461 2314.95 482.554C2315.27 483.646 2315.83 484.652 2316.6 485.496C2316.68 485.59 2317.49 484.594 2317.49 483.998C2317.47 481.048 2316.4 479.551 2314.45 479.627M2358.45 467.762C2365.28 470.832 2361.92 490.139 2372.12 487.496C2376.51 486.354 2375.01 481.987 2374.37 477.794C2372 462.063 2364.91 467.043 2358.45 467.762ZM2442.47 553.006C2445.99 558.492 2450.41 552.548 2454.11 557.628C2456.67 561.131 2459.6 557.166 2458.55 555.761C2453.39 548.835 2458.64 539.581 2454.57 534.765C2449.01 528.204 2448.6 539.128 2445.8 541.925C2443.64 544.091 2442.11 547.851 2442.47 553.005M324.41 518.442C322.432 510.401 319.738 511.077 317.626 509.59C311.12 505.013 309.922 516.6 304.902 516.641C304.057 516.654 304.607 518.87 305.674 520.71C311.03 529.977 313.718 520.369 317.658 519.741C319.79 519.396 321.9 518.929 324.411 518.441M1712.84 440.495C1720.91 445.688 1727.99 442.415 1737.62 440.942C1726.35 428.452 1720.21 439.775 1712.84 440.495ZM2068.16 452.702C2060.03 450.226 2054.84 449.818 2048.63 453.585C2056.7 464.206 2061.5 461.351 2068.16 452.702ZM2454.3 522.68C2450.17 520.005 2448.6 518.993 2447.02 517.984C2444.77 516.539 2440.44 511.263 2441.59 518.819C2442.51 524.839 2447.92 524.613 2454.3 522.685M2475.26 548.685C2480.24 553.352 2485.09 554.471 2490.62 545.85C2483.73 547.122 2479.49 547.904 2475.26 548.685ZM1673.8 589.442C1673.45 591.928 1674.16 593.33 1675.67 593.311C1677.97 593.29 1680.97 593.834 1682.24 591.939C1683.48 590.077 1680.85 586.395 1679.36 586.436C1677.27 586.513 1675.4 588.483 1673.8 589.442M1928.58 610.072C1927.17 607.872 1926.08 605.514 1924.66 604.142C1922.79 602.365 1918.8 595.52 1919.85 605.089C1920.57 611.656 1924.76 611.86 1928.58 610.072M2269 463.283C2270.29 465.006 2271.68 466.64 2273.19 468.175C2275.85 470.489 2279.85 472.858 2278.13 465.551C2276.87 460.282 2272.45 461.255 2269 463.283ZM104.472 369.262C105.09 372.825 106.732 373.413 108.1 372.391C109.368 371.431 111.086 369.475 111.015 367.729C110.904 365.03 108.796 364.793 107.307 365C105.551 365.245 104.509 366.753 104.468 369.262M2384.99 512.103C2384.62 508.697 2383.08 507.43 2381.37 506.796C2379.54 506.133 2378.24 507.28 2378.13 510.037C2377.98 513.474 2379.75 514.188 2381.44 514.411C2383.02 514.613 2384.53 514.346 2384.99 512.098M2039.14 227.687C2036.93 227.867 2034.39 227.744 2034.2 231.931C2034.07 234.512 2035.08 237.327 2037.38 236.234C2038.62 235.736 2039.7 234.893 2040.48 233.804C2041.26 232.714 2041.71 231.425 2041.78 230.087C2041.82 229.721 2040.07 228.509 2039.14 227.686M914.11 545.663C913.131 546.211 912.228 546.73 911.322 547.236C912.327 547.856 913.354 548.879 914.328 548.962C915.367 549.065 916.35 548.279 917.364 547.862C916.263 547.128 915.161 546.38 914.11 545.663ZM2150.13 406.747C2151.37 404.367 2151 402.566 2149.32 402.355C2147.7 402.16 2146.14 403.028 2144.55 403.434C2145.2 405.015 2145.95 406.555 2146.79 408.045C2149.22 411.792 2149.46 407.812 2150.13 406.747ZM1955.41 454.095C1954.59 453.307 1953.76 452.024 1952.94 451.854C1952.16 451.689 1951.41 452.688 1950.64 453.167C1951.41 454.143 1952.28 455.043 1953.22 455.854C1954.51 456.757 1955.28 455.99 1955.41 454.095M1938 602.12C1937.4 600.723 1936.95 598.584 1936.17 598.063C1934.29 596.766 1933.09 598.331 1933.13 601.087C1933.16 602.373 1934.03 604.733 1934.72 605.066C1936.38 605.911 1937.72 604.936 1938 602.119M2367.18 533.172C2366.7 535.054 2366.35 536.968 2366.14 538.9C2366.83 539.878 2367.83 540.594 2368.98 540.932C2370.62 541.135 2372.27 540.496 2371.45 536.988C2370.85 534.385 2369.64 532.626 2367.18 533.174M2345.47 606.667C2345.08 601.822 2342.81 599.967 2341.02 597.547C2340.76 598.862 2340.01 600.547 2340.36 601.428C2341.25 603.648 2342.42 605.749 2343.83 607.681C2344.67 608.876 2345.4 607.964 2345.47 606.662M2369.52 428.737C2368.25 429.409 2367.32 429.892 2366.39 430.389C2367.85 431.177 2369.34 432.318 2370.81 432.624C2371.8 432.839 2372.77 431.884 2373.75 431.446C2372.25 430.487 2370.75 429.528 2369.52 428.737ZM2193.55 247.433C2192.67 247.92 2190.78 248.631 2190.84 248.949C2191.62 253.1 2193.95 254.31 2196.25 254.881C2197.21 255.121 2198.19 254.132 2199.16 253.71C2197.93 250.281 2196.26 247.827 2193.55 247.433ZM1551.23 573.253C1552.03 574.514 1552.72 576.302 1553.6 576.766C1553.88 576.884 1554.19 576.937 1554.49 576.923C1554.8 576.908 1555.1 576.826 1555.37 576.681C1555.64 576.537 1555.88 576.335 1556.06 576.088C1556.25 575.842 1556.37 575.558 1556.44 575.257C1556.5 574.956 1556.49 574.645 1556.42 574.346C1556.34 574.048 1556.21 573.769 1556.01 573.53C1555.82 573.292 1555.57 573.099 1555.3 572.965C1555.02 572.832 1554.72 572.762 1554.41 572.759C1553.34 572.816 1552.27 572.982 1551.23 573.254M2280.52 513.044C2280.06 514.287 2279.2 515.473 2279.26 516.78C2279.32 518.171 2280.26 519.664 2280.81 521.11C2281.3 519.875 2282.21 518.699 2282.16 517.371C2282.1 516.007 2281.11 514.496 2280.52 513.045M2293.33 468.787C2291.87 469.428 2291.56 470.931 2292.73 472.862C2293.56 474.029 2294.5 475.112 2295.54 476.095C2295.77 474.538 2296.45 472.797 2296.09 471.493C2295.77 470.333 2294.3 469.656 2293.32 468.787M2336.51 465.314C2335.57 465.923 2334.63 466.531 2333.68 467.127C2334.74 467.719 2335.84 468.746 2336.84 468.756C2337.83 468.765 2338.74 467.74 2339.69 467.182C2338.63 466.55 2337.57 465.932 2336.51 465.313M1655.06 579.104C1653.88 578.398 1653.08 579.215 1653.33 581.557C1653.51 583.145 1654.19 585.555 1654.96 586.091C1655.81 586.684 1657.83 585.906 1657.92 585.036C1658.24 582.266 1656.6 580.536 1655.06 579.104ZM1498.58 570.209C1498.1 570.357 1497.61 570.521 1497.13 570.671C1497.55 571.098 1498.05 571.934 1498.4 571.867C1499 571.763 1499.51 571.114 1500.06 570.677C1499.57 570.524 1499.07 570.374 1498.58 570.209ZM2130.5 456.806C2131.44 457.681 2132.42 459.14 2133.33 459.239C2134.26 459.332 2135.13 458.118 2136.03 457.477C2135.05 456.636 2134.05 455.237 2133.09 455.107C2132.2 454.974 2131.36 456.186 2130.5 456.808M2083.64 234.296C2084.13 235.685 2084.62 237.076 2085.11 238.466C2085.88 237.449 2086.66 236.431 2087.42 235.377C2088.5 233.861 2088.46 232.453 2087.21 231.789C2085.43 230.871 2084.12 231.575 2083.64 234.296ZM2059.12 506.487C2057.33 506.889 2056.5 508.523 2056.77 511.315C2056.98 512.07 2057.31 512.786 2057.76 513.432C2058.78 512.011 2059.8 510.591 2060.82 509.17C2060.25 508.277 2059.68 507.371 2059.12 506.49M2042.31 452.607C2042.15 451.882 2042.06 450.677 2041.82 450.53C2040.84 450.049 2039.82 449.663 2038.76 449.378C2038.78 450.155 2038.9 450.927 2039.11 451.676C2040.14 452.084 2041.22 452.396 2042.31 452.607M205.274 435.924C204.831 435.254 204.457 434.281 203.957 433.98C202.372 432.983 201.825 433.858 202.654 436.089C202.852 436.628 203.736 436.938 204.268 436.957C204.629 436.969 204.94 436.291 205.274 435.924ZM306.954 501.119C305.873 502.332 305.913 503.766 307.061 505.414C307.43 504.818 307.673 504.154 307.778 503.461C307.617 502.645 307.34 501.856 306.954 501.119ZM293.096 406.953C292.682 407.378 292.258 407.803 291.835 408.229C292.292 408.786 292.749 409.714 293.214 409.83C294.77 410.256 295.344 409.376 294.636 407.864C294.38 407.309 293.631 407.243 293.096 406.953ZM1714.04 590.946C1713.09 591.53 1712.24 592.052 1711.39 592.576C1711.81 593.127 1712.34 594.205 1712.63 594.134C1713.54 593.774 1714.4 593.292 1715.19 592.703C1714.8 592.103 1714.41 591.493 1714.04 590.946ZM1505.72 589.164L1505.65 587.226L1504.28 587.973L1505.72 589.164ZM2437.97 462.121C2438.98 462.826 2440.07 463.418 2441.21 463.884C2441.57 463.98 2441.94 462.825 2442.31 462.243C2441.49 461.344 2440.65 459.817 2439.86 459.723C2439.2 459.648 2438.63 461.215 2437.97 462.128M2420.85 330.947C2421.28 329.5 2421.61 328.026 2421.84 326.536C2421.88 326.142 2421 325.311 2420.54 324.673C2420.13 326.083 2419.83 327.519 2419.63 328.971C2419.59 329.433 2420.42 330.276 2420.85 330.947ZM2412.82 401.303C2413.31 401.537 2413.85 402.064 2414.28 401.982C2416.02 401.616 2416.03 400.583 2414.29 399.432C2413.87 399.156 2413.27 399.411 2412.86 399.71C2412.68 399.841 2412.82 400.748 2412.82 401.3M2419.29 546.866C2419.01 546.259 2418.79 545.341 2418.44 545.147C2418.22 545.018 2417.96 544.974 2417.71 545.023C2417.45 545.072 2417.23 545.211 2417.07 545.415C2416.35 546.805 2416.81 547.898 2418.21 548.011C2418.59 548.046 2418.93 547.265 2419.29 546.866M2095.49 235.582C2095.16 235.729 2094.64 235.706 2094.53 236.058C2094.28 236.72 2094.24 237.442 2094.42 238.127C2095.32 239.902 2096.04 239.668 2096.15 237.57C2096.03 236.878 2095.81 236.207 2095.49 235.582ZM2123 445.922C2123.46 446.591 2124 447.845 2124.34 447.795C2125.37 447.509 2126.35 447.072 2127.25 446.499C2126.81 445.827 2126.27 444.519 2125.96 444.578C2124.92 444.887 2123.93 445.339 2123.01 445.921M2450.43 365.234L2450.41 363.521L2448.9 364.186L2450.43 365.234ZM2348.33 270.627C2348.74 270.423 2349.34 270.443 2349.55 269.99C2350.51 267.935 2350.04 266.664 2348.34 266.748C2347.98 266.763 2347.52 267.773 2347.52 268.434C2347.67 269.204 2347.94 269.945 2348.33 270.629M54.816 156.575C55.114 157.259 55.4039 157.944 55.7031 158.628C56.069 158.3 56.4062 157.94 56.7099 157.554C56.2779 156.469 55.7433 155.474 55.243 154.458C55.1024 155.159 54.9559 155.874 54.8165 156.578M2221.37 391.365C2221.1 390.745 2220.88 389.782 2220.54 389.575C2220.32 389.442 2220.05 389.393 2219.8 389.438C2219.54 389.483 2219.31 389.618 2219.14 389.819C2218.37 391.068 2218.82 392.165 2220.26 392.406C2220.64 392.47 2221 391.74 2221.37 391.365M2236.52 402.125L2237.94 403.265L2238.01 401.616L2236.52 402.125ZM2389.15 453.953C2389.64 454.188 2390.14 454.576 2390.6 454.58C2390.78 454.587 2390.85 453.693 2390.98 453.214C2390.49 452.979 2389.99 452.591 2389.52 452.591C2389.36 452.58 2389.28 453.476 2389.15 453.953M2247.73 310.135C2247.28 310.387 2246.83 310.639 2246.39 310.877C2247.28 311.075 2248.16 311.274 2249.05 311.459C2248.61 311.023 2248.17 310.586 2247.73 310.136M2259.77 397.936C2259.36 397.726 2258.78 397.165 2258.58 397.369C2257.74 398.206 2258.07 398.966 2259.43 399.171C2259.55 399.202 2259.65 398.372 2259.77 397.937M2041.9 398.73C2042.41 398.975 2043.13 399.646 2043.38 399.39C2044.4 398.34 2043.97 397.395 2042.28 397.161C2042.13 397.132 2042.03 398.184 2041.9 398.73ZM2064.88 388.396C2064.67 389.022 2064.57 389.677 2064.58 390.336C2065.08 392.878 2065.78 393.086 2066.33 390.848C2066.4 390.128 2066.27 389.403 2065.97 388.747C2065.82 388.432 2065.26 388.501 2064.88 388.396M2065.74 230.185C2064.84 230.635 2063.94 231.071 2063.05 231.523C2063.47 232.115 2063.97 233.268 2064.28 233.21C2065.23 232.947 2066.14 232.553 2066.98 232.038L2065.74 230.188M200.789 499.631C200.522 500.192 199.948 500.84 200.04 501.316C200.437 503.26 201.358 503.906 202.425 503.066C202.817 502.769 203.05 502.093 203.36 501.592C202.505 500.933 201.65 500.275 200.787 499.631M2093.35 448.779C2092.97 449.141 2092.59 449.518 2092.21 449.881C2092.6 450.41 2092.99 451.258 2093.39 451.384C2094.73 451.835 2095.24 451.05 2094.66 449.556C2094.49 449.109 2093.8 449.035 2093.35 448.78M2098.03 457.807C2097.2 458.367 2096.38 458.925 2095.56 459.483C2095.93 460.14 2096.33 461.3 2096.67 461.344C2097.59 461.353 2098.51 461.212 2099.38 460.926L2098.03 457.807M1943.34 282.603L1944.01 280.837L1942.77 280.28L1943.34 282.603ZM2008.52 532.079C2009.13 533.499 2009.75 534.905 2010.37 536.322C2010.75 535.797 2011.31 535.411 2011.46 534.723C2011.89 532.73 2011.25 531.206 2009.79 530.815C2009.37 530.703 2008.94 531.625 2008.51 532.081M1991.63 173.662C1992.49 173.866 1993.36 174.083 1994.22 174.284C1993.79 173.847 1993.37 173.145 1992.94 173.05C1992.52 172.954 1992.06 173.412 1991.63 173.662ZM1315.96 459.232C1316.35 459.817 1316.82 460.948 1317.11 460.907C1318.03 460.667 1318.91 460.301 1319.74 459.818C1319.35 459.234 1318.88 458.102 1318.6 458.143C1317.67 458.376 1316.79 458.742 1315.97 459.23M744.216 529.023L745.508 528.332L744.08 527.523L744.216 529.023ZM2493.43 393.626L2492.36 392.598L2492.36 394.137L2493.43 393.626ZM2364.79 510.407L2364.25 511.93L2365.38 512.162L2364.79 510.407ZM2351.34 609.991L2351.92 608.465L2350.75 608.196L2351.34 609.991ZM2402.13 286.363L2403.18 287.38L2403.19 285.84L2402.13 286.363ZM2466.58 333.886L2467.06 332.693L2466.14 332.446L2466.58 333.886ZM1468.84 569.158L1469.72 570.102L1469.74 568.709L1468.84 569.158ZM1474.37 548.321L1475.3 549.254L1475.3 547.838L1474.37 548.321ZM1440.12 584.791C1439.75 584.231 1439.37 583.26 1439.02 583.204C1438.67 583.148 1438.36 583.992 1438.02 584.444C1438.39 585.018 1438.77 585.974 1439.11 586.044C1439.46 586.115 1439.79 585.255 1440.12 584.791ZM1567.8 509.335C1567.42 508.858 1567.02 508.016 1566.69 507.999C1566.35 507.983 1566.09 508.802 1565.8 509.27C1566.15 509.78 1566.53 510.668 1566.85 510.702C1567.17 510.736 1567.45 509.897 1567.8 509.335ZM1046.94 543.093L1047.96 544.132L1048 542.653L1046.94 543.093ZM1025.18 536.271L1026.18 537.341L1026.21 535.756L1025.18 536.271ZM2082.89 611.581C2083.22 612.148 2083.55 612.703 2083.88 613.27C2084.2 612.849 2084.77 612.465 2084.77 611.985C2084.76 611.477 2084.17 610.864 2083.84 610.295C2083.52 610.729 2083.21 611.161 2082.89 611.581ZM2299.54 541.056L2300.73 542.199L2300.72 540.484L2299.54 541.056ZM2273.21 263.658L2274.24 264.669L2274.24 263.129L2273.21 263.658ZM2258.98 467.226L2258.43 468.79L2259.59 469.017L2258.98 467.226ZM2326.4 461.818L2325.26 460.624L2325.24 462.413L2326.4 461.818ZM2312.01 417.317L2310.99 416.307L2310.98 417.848L2312.01 417.317ZM2226.36 619.168L2225.2 617.951L2225.18 619.787L2226.36 619.168ZM2238.64 522.833L2239.16 521.409L2238.14 521.168L2238.64 522.833ZM123.167 416.663L123.66 415.413L122.769 415.132L123.167 416.663ZM123.124 362.062L122.099 361.053L122.079 362.526L123.124 362.062ZM1848.3 442.838L1847.25 441.833L1847.25 443.332L1848.3 442.838ZM1823.61 496.68L1824.12 495.257L1823.09 495.017L1823.61 496.68ZM1681.17 438.557L1680.68 439.976L1681.73 440.171L1681.17 438.557ZM1946.38 227.179L1946.91 225.577L1945.74 225.365L1946.38 227.179ZM1958.71 506.292L1958.25 507.647L1959.17 507.865L1958.71 506.292ZM1942.22 447.164L1943.29 448.166L1943.28 446.641L1942.22 447.164ZM2010.52 322.348L2011.05 320.734L2009.94 320.509L2010.52 322.348Z"
            fill="#F89BAE"
          />
        </motion.svg>
      </div>
      <div className=" max-w-screen-xl flex mx-auto justify-between absolute">
        <motion.div className=" flex flex-col" whileInView={{ x: 150, y: -90 }}>
          <div className=" w-[576px] h-[354px] bg-white" >
          <img src="" alt="" />

          </div>
          <div>
            <span className=" font-thin text-2xl font-[SaolDisplay-Light]">
              Client: Coca Cola
            </span>
            <br />
            <span className=" font-thin text-2xl font-[SaolDisplay-Light]">
              Projekt: dolor sit amet
            </span>
            <br />
            <span className=" font-thin text-2xl font-[SaolDisplay-Light]">
              Date: consetetur
            </span>
          </div>
          <div className=" w-96 mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            eligendi illo saepe nisi veniam quisquam blanditiis inventore
            voluptatum aspernatur nam quis porro earum fuga labore corporis
            sequi, aliquid error.
          </div>
        </motion.div>
        <motion.div className=" flex flex-col" whileInView={{ x: 330, y: -150 }}>
          <div className=" w-[424px] h-[649px] bg-white" >
          <img src="" alt="" />

          </div>
          <div>
            <span className=" font-thin text-2xl font-[SaolDisplay-Light]">
              Client: Coca Cola
            </span>
            <br />
            <span className=" font-thin text-2xl font-[SaolDisplay-Light]">
              Projekt: dolor sit amet
            </span>
            <br />
            <span className=" font-thin text-2xl font-[SaolDisplay-Light]">
              Date: consetetur
            </span>
          </div>
          <div className=" w-96 mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            eligendi illo saepe nisi veniam quisquam blanditiis inventore
            voluptatum aspernatur nam quis porro earum fuga labore corporis
            sequi, aliquid error.
          </div>
        </motion.div>
 
      </div>
    </div>
  );
}

export default Section7;