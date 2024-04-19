import React from "react";
import { motion } from "framer-motion";
function Section13() {
  return (
    <div className="">
      <div className="  absolute ">
        <motion.div initial={{ rotate: -90, y: 800, x: -50 }}>
          <h1 className=" text-5xl font-[SaolDisplay-Light]">05 About</h1>
        </motion.div>
      </div>
      <div className="h-[70vh]">
        <div className=" absolute w-full justify-end flex">
          <svg
            width="341"
            height="586"
            viewBox="0 0 341 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M196.247 2.10117C166.914 1.94764 134.788 -1.64344 107.818 4.11186C87.7005 8.40032 71.9373 15.0492 54.8219 21.6331C42.1911 26.4872 32.9523 29.3785 25.6563 37.328C17.751 45.9438 10.6077 56.5802 4.81675 65.716C-3.22932 78.4142 1.18593 91.8637 3.25655 105.408C4.45411 113.252 1.33293 119.904 9.70983 127.248C12.3342 129.546 17.2802 131.347 20.099 133.637C23.0706 136.05 23.8249 139.582 27.1331 141.796C34.2298 146.55 50.3076 146.49 56.045 151.111C61.729 155.689 57.6641 163.597 57.1934 168.813C54.8828 194.404 44.8552 222.193 66.4386 247.274C75.477 257.777 76.9441 270.256 79.989 281.286C81.8952 288.186 87.3167 294.253 92.5649 300.763C96.576 305.741 100.66 310.668 102.217 315.951C104.585 323.986 100.254 323.487 97.331 328.694C90.1507 341.499 76.7583 354.222 71.8345 367.815C66.5235 382.488 64.0623 396.819 62.7237 412.282C61.2334 429.504 58.7358 445.482 77.9657 461.832C89.3634 471.52 105.241 479.583 116.566 489.482C127.925 499.411 138.608 505.31 155.531 512.857C174.296 521.22 195.44 527.649 216.336 534.277C239.146 541.512 263.872 545.461 285.845 553.468C311.281 562.735 336.397 568.634 364.384 574.882C393.598 581.403 412.449 586.122 442.566 585.55C485.038 584.744 528.393 581.599 565.223 571.57C583.564 566.574 600.004 559.83 612.688 551.176C626.087 542.033 630.171 531.062 640.299 521.05C642.632 518.745 643.612 516.442 643.645 514.227C643.925 513.603 644.196 512.97 644.464 512.344C651.217 504.981 657.148 496.905 662.153 488.257C673.851 468.665 686.892 450.046 688.65 428.851C691.044 399.943 691.903 372.495 669.026 344.038C652.641 323.657 644.29 304.782 634.975 283.529C622.583 255.249 599.583 224.537 596.733 195.722C596.149 189.775 597.885 184.668 592.965 178.861C582.167 166.104 562.933 153.972 548.429 142.116C514.589 114.45 482.579 87.7978 431.123 68.5693C407.561 59.763 384.1 51.5154 362.079 41.3934C342.718 32.4935 324.439 20.6641 301.979 14.2122C268.021 4.45959 232.077 2.28529 196.248 2.09925"
              fill="#FFB54E"
            />
          </svg>
        </div>
        <motion.h1
          className=" text-9xl font-[SaolDisplay-Light] self-center"
          whileInView={{ scale: 2.2, x: 1300, y: 200 }}
          transition={{ duration: 1 }}
        >
          About
        </motion.h1>
      </div>
      <div className="grid grid-cols-2">
        <div className=" items-center justify-start flex">
          <img
            className="w-[500px]"
            src="https://img.freepik.com/premium-psd/man-with-orange-shirt-smiling-smiling_176841-44868.jpg"
            alt=""
          />
        </div>
        <div className="text-4xl pr-56 py-2">
          Hello! I’m Philippe, a passionate digital designer with a focus on
          aesthetics and innovation. I’m also dedicated to using design and
          technology for positive social change. Outside of work, I enjoy
          spending time with my two kids, as well as indulging in design,
          interior decor, travel, culture, and art, all of which inspire my
          creative process. <br />
          <br />
          Let’s connect and create innovative digital solutions and impactful
          brand experiences together.
        </div>
      </div>
      <motion.div whileInView={{ y: -1020 }} className=" absolute">
        <svg
          width="504"
          height="964"
          viewBox="0 0 624 1664"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-586.131 53.8334C-580.293 48.557 -574.058 43.736 -567.482 39.4128C-556.675 32.3434 -545.025 28.7734 -533.759 25.3214C-528.407 23.6809 -522.992 22.0232 -517.554 19.9722C-513.415 18.2098 -509.406 16.1534 -505.56 13.8189C-496.32 8.5606 -485.848 2.6014 -476.229 3.59553C-473.59 3.94371 -470.986 4.51592 -468.444 5.30575C-466.591 5.86552 -464.708 6.32199 -462.804 6.67328C-457.06 7.60873 -451.67 6.33628 -445.963 4.98059L-444.02 4.52452C-385.289 -9.07623 -314.783 8.77175 -260.025 51.1104L-254.756 55.1762C-223.761 79.0746 -194.487 101.638 -178.447 136.236C-173.022 147.94 -162.66 154.253 -151.691 160.939C-145.06 164.982 -138.202 169.162 -132.466 174.654C-120.197 186.397 -112.319 201.343 -104.704 215.799C-102.166 220.614 -99.6404 225.408 -96.9685 230.051C-82.0151 256.029 -53.5447 277.065 -28.4262 295.624C-22.1513 300.26 -16.0257 304.787 -10.2704 309.257C15.3212 329.14 36.7441 343.935 57.1404 355.807C90.6051 375.285 126.239 389.734 160.701 403.708C198.111 418.877 236.793 434.564 273.01 456.767C341.964 499.041 407.089 567.234 464.551 627.396L475.464 638.815C484.749 648.512 493.308 658.174 496.012 669.718C496.812 673.633 497.2 677.62 497.17 681.615C497.183 684.337 497.358 687.056 497.693 689.757C498.981 698.722 503.866 707.79 508.591 716.558C532.85 761.542 554.631 807.817 573.838 855.178C583.575 879.227 592.781 904.013 601.192 928.855C602.179 931.769 603.568 935.169 605.032 938.759C608.577 947.45 612.594 957.299 612.79 964.62C611.886 970.612 610.578 976.537 608.874 982.353C609.576 984.229 610.271 986.004 610.938 987.711C612.534 991.584 613.931 995.536 615.124 999.551C615.644 1001.43 616.234 1003.32 616.824 1005.21C619.846 1014.89 623.27 1025.87 616.215 1035.12C614.462 1037.43 616.03 1042.57 617.412 1047.11C617.767 1048.27 618.113 1049.42 618.418 1050.54C620.525 1058.15 622.162 1065.89 623.321 1073.71C623.758 1076.71 623.752 1082.48 620.957 1085C620.682 1085.23 620.393 1085.43 620.09 1085.62C619.433 1085.99 618.817 1086.43 618.253 1086.93C614.102 1090.67 615.33 1097.11 616.749 1104.57L617.243 1107.21C617.519 1108.71 617.926 1110.24 618.333 1111.76C619.187 1114.5 619.709 1117.34 619.89 1120.21L619.982 1123.39C620.19 1129.57 620.404 1135.95 618.042 1140.86C615.151 1146.86 614.387 1153.69 615.482 1163.71L616.133 1169.22C617.491 1180.33 618.894 1191.83 615.038 1202.59C613.372 1207.24 613.633 1213.59 613.88 1219.73C614.01 1222.94 614.14 1226.15 614.03 1229.22C613.888 1233.22 613.603 1237.19 613.317 1241.15L613.039 1245.08C612.737 1249.56 611.341 1252.95 608.888 1255.16C606.947 1256.85 604.49 1257.83 601.919 1257.94C600.5 1257.97 599.132 1258.48 598.041 1259.39C596.063 1261.17 595.303 1264.68 594.635 1268.42C594.301 1270.3 594.005 1272.21 593.704 1274.11C593.026 1279.25 591.98 1284.32 590.573 1289.3C589.762 1291.86 588.295 1294.17 586.317 1295.98C584.988 1297.23 583.343 1298.09 581.559 1298.47C578.256 1298.98 575.165 1300.42 572.643 1302.62C568.017 1306.78 565.651 1313.91 565.197 1325.04C564.83 1333.99 563.21 1340.45 555.76 1345.95C552.029 1348.71 549.451 1353.15 546.67 1357.89C545.245 1360.33 543.815 1362.76 542.23 1364.99C538.831 1369.78 535.267 1374.42 531.596 1378.95C531.009 1379.7 530.366 1380.4 529.673 1381.04C529.043 1381.69 528.28 1382.2 527.436 1382.52C526.592 1382.84 525.687 1382.98 524.786 1382.91C522.377 1382.54 519.914 1382.73 517.587 1383.46C515.261 1384.18 513.132 1385.44 511.364 1387.11C508.724 1389.7 506.359 1392.55 504.306 1395.62C502.769 1397.75 501.229 1399.87 499.558 1401.81C499.157 1402.96 498.566 1404.04 497.811 1405C496.17 1406.87 494.431 1408.65 492.6 1410.34C487.018 1415.37 477.938 1420.99 463.588 1411.79C463.527 1411.79 463.001 1411.79 462.65 1411.79C462.512 1411.79 462.373 1411.79 462.235 1411.79L457.082 1415.18C451.996 1418.57 446.736 1422.06 441.202 1425.06C437.594 1427.01 432.138 1428.06 428.08 1426C421.843 1422.82 418.184 1424.93 413.551 1427.59L411.824 1428.57C408.98 1430.09 406.251 1431.81 403.658 1433.73C397.465 1438.56 390.273 1440.7 381.674 1440.26C369.657 1439.64 359.326 1443.88 350.803 1448.11C346.349 1450.18 341.748 1451.91 337.038 1453.3C335.002 1453.95 332.967 1454.6 330.969 1455.31C330.484 1455.48 329.963 1455.53 329.457 1455.44C328.95 1455.35 328.474 1455.14 328.075 1454.81L310.414 1440.48C306.994 1441.35 303.447 1441.97 299.896 1442.59C289.542 1444.4 279.858 1446.06 273.327 1453.91C273.235 1454.03 272.675 1454.6 272.568 1454.7C272.193 1455.03 271.794 1455.34 271.375 1455.62C257.099 1465.12 250.333 1464.15 233.267 1450.16C231.292 1448.54 229.433 1446.72 227.552 1444.87L226.03 1443.39L188.724 1449.69C187.946 1449.82 187.148 1449.77 186.397 1449.53C174.559 1443.85 163.434 1443.72 151.657 1443.57L147.786 1443.51C145.542 1443.37 143.325 1442.94 141.19 1442.24L139.431 1441.75C128.348 1438.86 127.566 1438.37 118.563 1426.45L116.354 1425.73C107.054 1422.71 97.4367 1419.58 88.7006 1421.27C85.4501 1421.75 82.1296 1421.22 79.1965 1419.73C65.664 1413.04 51.0574 1408.8 36.0484 1407.18C31.4412 1406.66 26.7802 1404.51 22.2749 1402.43C20.8252 1401.76 19.3796 1401.09 17.9491 1400.48C13.1381 1398.45 9.68977 1394.6 7.71325 1389.04C7.03438 1387.33 6.20939 1385.68 5.24734 1384.11L4.41868 1382.62C3.7883 1382.42 3.17014 1382.2 2.56778 1382C1.35707 1381.47 0.0667706 1381.15 -1.24989 1381.04C-11.1475 1382.21 -21.4472 1380.17 -31.406 1378.19C-39.7813 1376.53 -48.4403 1374.81 -56.4878 1375.14C-64.8933 1375.38 -73.0846 1372.47 -79.4459 1366.97C-84.3537 1362.84 -86.7741 1365.02 -87.5685 1365.73C-87.9241 1366.06 -88.2474 1366.41 -88.5337 1366.8C-89.3819 1367.95 -90.3403 1369.01 -91.3952 1369.97C-95.6772 1373.82 -100.935 1375.15 -108.443 1374.28C-112.308 1373.83 -116.128 1375.07 -120.171 1376.38C-121.692 1376.87 -123.207 1377.36 -124.73 1377.77C-130.966 1379.44 -137.151 1381.22 -143.978 1383.19L-152.269 1385.57C-154.811 1392.34 -160.074 1397.08 -167.649 1399.38C-170.458 1400.35 -173.017 1401.93 -175.14 1404.02C-176.794 1405.51 -178.368 1407.16 -179.95 1408.81C-181.639 1410.58 -183.331 1412.34 -185.105 1413.94L-186.237 1414.93C-188.306 1416.66 -190.482 1418.27 -192.659 1419.88C-194.599 1421.31 -196.54 1422.74 -198.403 1424.28C-203.048 1428.12 -208.485 1427.9 -212.702 1427.28C-214.931 1426.96 -217.274 1427.5 -219.986 1428.12C-220.369 1428.21 -220.756 1428.3 -221.147 1428.39L-220.512 1430.4C-219.543 1433.47 -218.708 1436.11 -217.918 1438.76C-216.17 1444.58 -214.62 1453.04 -221.309 1459.06C-222.517 1460.13 -223.848 1461.05 -225.274 1461.81C-227.071 1462.79 -228.743 1463.99 -230.254 1465.37C-234.303 1469.02 -237.664 1473.98 -240.914 1478.77L-242.458 1481.04C-245.126 1484.94 -247.999 1488.69 -251.065 1492.29C-251.891 1493.26 -252.78 1494.18 -253.727 1495.04C-260.306 1500.97 -267.817 1501.2 -276.088 1495.75C-276.529 1496.41 -276.956 1497.08 -277.377 1497.73C-279.337 1501.08 -281.707 1504.17 -284.434 1506.93C-285.244 1507.69 -286.019 1508.52 -286.799 1509.35C-287.784 1510.41 -288.779 1511.47 -289.838 1512.42C-292.86 1515.14 -297.811 1518.39 -305.905 1515.16C-306.348 1514.99 -307.938 1515.48 -309.131 1516.51L-311.896 1518.9C-313.742 1520.39 -315.228 1522.28 -316.246 1524.42C-320.527 1535.18 -327.941 1542.42 -335.805 1549.51L-338.667 1552.07C-344.241 1557.09 -346.831 1562.07 -347.402 1568.78C-347.699 1572.43 -349.294 1575.84 -351.899 1578.41C-352.643 1579.09 -353.504 1579.63 -354.442 1580.01C-358.822 1581.78 -362.836 1584.35 -366.279 1587.59C-369.652 1590.75 -372.842 1594.1 -375.831 1597.63L-379.11 1601.31C-380.633 1602.91 -382.281 1604.39 -384.038 1605.73C-385.459 1606.81 -386.803 1607.99 -388.06 1609.26C-388.478 1609.71 -388.901 1610.12 -389.333 1610.51C-393.25 1614.04 -401.404 1618.36 -412.705 1608.75C-417.499 1609.5 -421.963 1611.65 -425.538 1614.93C-426.074 1615.41 -426.597 1615.91 -427.107 1616.44C-428.386 1617.75 -429.679 1619.02 -431.007 1620.21C-436.62 1625.27 -444.696 1630.9 -457.428 1629.57C-461.425 1629.15 -465.734 1630.82 -469.562 1634.27C-469.958 1634.62 -470.342 1634.99 -470.713 1635.37L-471.672 1636.29C-474.501 1638.63 -477.622 1640.6 -480.957 1642.14C-482.605 1642.98 -484.257 1643.83 -485.812 1644.79C-492.955 1649.19 -500.888 1648.83 -508.843 1643.77L-535.436 1654.44C-535.923 1654.63 -536.452 1654.7 -536.971 1654.62C-537.491 1654.55 -537.982 1654.34 -538.396 1654.02L-558.07 1638.71L-559.54 1638.99C-561.888 1639.45 -564.363 1639.93 -566.878 1640.29C-575.608 1641.56 -579.977 1644.55 -582.287 1650.68C-583.035 1652.77 -584.277 1654.65 -585.908 1656.15C-588.876 1658.83 -592.945 1659.74 -597.362 1658.74C-608.96 1656.09 -618.779 1658.79 -629.175 1661.64C-638.305 1664.15 -647.105 1664.17 -657.368 1661.86C-657.976 1661.73 -658.525 1661.41 -658.941 1660.94L-671.681 1646.75L-676.787 1646.45C-681.789 1646.18 -686.694 1645.91 -691.647 1645.29C-696.061 1644.73 -700.647 1643.85 -704.291 1641.25C-714.1 1634.22 -723.636 1632.16 -734.937 1631.25C-740.981 1630.63 -746.96 1629.48 -752.805 1627.82C-757.123 1626.68 -761.421 1625.2 -763.644 1622.16C-769.754 1613.8 -777.289 1611.75 -785.269 1609.57L-789.289 1608.44C-798.911 1605.59 -807.086 1602.3 -815.711 1595.53C-816.272 1595.09 -816.657 1594.46 -816.798 1593.76C-821.024 1572.87 -838.207 1565 -853.373 1558.05C-854.684 1557.45 -855.971 1556.9 -857.233 1556.37C-864.28 1553.37 -870.934 1550.54 -876.661 1541.16C-879.346 1536.77 -883.891 1533.18 -888.701 1529.38C-891.057 1527.52 -893.414 1525.66 -895.577 1523.69C-901.198 1518.55 -906.787 1513.38 -912.131 1508.43L-919.374 1501.73C-919.808 1501.33 -920.115 1500.81 -920.255 1500.24C-923.599 1486.58 -920.318 1477.39 -915.691 1467.99L-919.263 1463.24C-922.669 1458.71 -926.05 1454.2 -929.538 1449.78C-937.152 1440.13 -945.526 1428.33 -949.917 1413.99C-951.498 1408.84 -954.183 1403.78 -957.025 1398.43C-958.47 1395.71 -959.913 1392.98 -961.213 1390.24C-963.608 1385.18 -965.92 1380.09 -968.309 1374.83L-971.669 1367.46C-971.906 1366.94 -971.991 1366.37 -971.913 1365.8C-971.836 1365.24 -971.599 1364.71 -971.231 1364.27C-963.653 1355.32 -963.262 1343.33 -969.967 1325.41C-974.39 1313.57 -974.887 1303.15 -971.486 1293.55C-966.555 1279.64 -965.804 1264.75 -965.011 1248.99C-964.078 1230.47 -963.114 1211.33 -954.796 1193.79C-939.803 1162.17 -916.243 1137.32 -893.457 1113.29C-884.433 1103.78 -875.099 1093.94 -866.49 1083.86C-834.809 1046.89 -807.141 1006.66 -783.952 963.855C-734.378 871.919 -709.234 773.713 -709.214 671.964C-709.207 632.42 -713.05 591.43 -716.765 551.79C-717.943 539.228 -719.12 526.666 -720.185 514.125C-722.122 491.276 -724.345 461.193 -724.343 431.115C-724.326 327.166 -695.134 224.819 -635.097 118.224C-619.492 90.5138 -603.473 69.4482 -586.131 53.8334ZM602.952 981.365C603.574 979.475 606.846 966.975 606.791 964.778C606.623 958.554 602.825 949.241 599.475 941.026C597.961 937.312 596.529 933.794 595.508 930.781C587.132 906.05 577.969 881.372 568.276 857.431C549.221 810.44 527.617 764.525 503.56 719.888C498.329 710.18 493.187 700.636 491.747 690.616C491.379 687.682 491.185 684.729 491.166 681.772C491.201 678.187 490.865 674.608 490.162 671.093C487.804 661.023 479.81 652.045 471.122 642.972L460.213 631.545C403.006 571.643 338.166 503.749 269.878 461.878C234.086 439.932 195.636 424.341 158.452 409.263C123.796 395.211 87.9601 380.681 54.1272 360.988C33.4936 348.982 11.8664 334.046 -13.9443 313.993C-19.6622 309.551 -25.7503 305.054 -31.985 300.447C-57.5767 281.539 -86.5829 260.107 -102.162 233.041C-104.871 228.335 -107.432 223.476 -110.006 218.594C-117.401 204.564 -125.047 190.057 -136.612 178.989C-141.879 173.947 -148.161 170.118 -154.812 166.063C-166.062 159.205 -177.695 152.114 -183.888 138.761C-199.313 105.498 -228.022 83.3638 -258.417 59.9295L-263.695 55.8612C-317.067 14.5986 -385.646 -2.83132 -442.667 10.3733L-444.581 10.8233C-450.609 12.2506 -456.842 13.7267 -463.769 12.5989C-465.894 12.2117 -467.995 11.7068 -470.064 11.0865C-472.278 10.391 -474.547 9.88268 -476.846 9.56704C-484.552 8.77087 -494.136 14.225 -502.593 19.0364C-506.707 21.5327 -510.999 23.7227 -515.435 25.5886C-520.994 27.6863 -526.528 29.3867 -532.001 31.0612C-543.367 34.5441 -554.103 37.8348 -564.195 44.4397C-570.513 48.5942 -576.504 53.227 -582.113 58.2974C-598.964 73.4699 -614.586 94.0394 -629.873 121.183C-689.389 226.855 -718.329 328.24 -718.346 431.13C-718.347 460.981 -716.134 490.903 -714.21 513.633C-713.148 526.156 -711.971 538.699 -710.795 551.244C-707.065 591.021 -703.21 632.15 -703.215 671.977C-703.234 774.731 -728.621 873.895 -778.671 966.715C-802.062 1009.9 -829.971 1050.48 -861.929 1087.77C-870.644 1097.97 -880.027 1107.86 -889.104 1117.44C-911.566 1141.12 -934.797 1165.62 -949.376 1196.37C-957.182 1212.83 -958.116 1231.37 -959.019 1249.3C-959.799 1264.8 -960.607 1280.83 -965.832 1295.56C-968.742 1303.78 -968.257 1312.86 -964.348 1323.32C-959.825 1335.41 -955.139 1352.85 -965.451 1366.65L-962.848 1372.36C-960.469 1377.6 -958.171 1382.65 -955.789 1387.69C-954.53 1390.35 -953.126 1392.99 -951.724 1395.63C-948.872 1401 -945.93 1406.55 -944.178 1412.25C-940.08 1425.63 -932.095 1436.86 -924.826 1446.08C-921.308 1450.54 -917.895 1455.08 -914.464 1459.65L-909.786 1465.86C-909.447 1466.31 -909.24 1466.85 -909.188 1467.4C-909.137 1467.96 -909.243 1468.53 -909.496 1469.03C-914.05 1478.05 -917.328 1485.94 -914.626 1497.95L-908.052 1504.03C-902.718 1508.97 -897.138 1514.14 -891.528 1519.27C-889.473 1521.14 -887.227 1522.91 -884.987 1524.68C-879.971 1528.64 -874.794 1532.73 -871.545 1538.04C-866.821 1545.78 -861.554 1548.02 -854.891 1550.86C-853.581 1551.42 -852.245 1551.98 -850.882 1552.61C-835.476 1559.66 -816.364 1568.42 -811.162 1591.48C-803.587 1597.22 -796.231 1600.14 -787.591 1602.7L-783.698 1603.79C-775.475 1606.03 -766.156 1608.58 -758.807 1618.63C-757.531 1620.38 -752.988 1621.58 -751.278 1622.03C-745.775 1623.6 -740.146 1624.68 -734.456 1625.28C-723.816 1626.14 -712.376 1628.09 -700.801 1636.38C-698.116 1638.3 -694.282 1638.92 -690.898 1639.35C-686.087 1639.96 -681.323 1640.21 -676.463 1640.48L-670.072 1640.85C-669.292 1640.9 -668.563 1641.26 -668.041 1641.84L-655.123 1656.23C-646.255 1658.11 -638.651 1658.03 -631.264 1656C-620.113 1652.94 -609.098 1649.92 -596.03 1652.9C-592.086 1653.8 -589.286 1652.25 -587.905 1648.58C-586.774 1645.45 -584.904 1642.64 -582.454 1640.4C-578.939 1637.23 -574.267 1635.31 -567.74 1634.37C-565.322 1634.02 -562.948 1633.55 -560.691 1633.11L-557.846 1632.57C-557.429 1632.49 -557.001 1632.5 -556.59 1632.6C-556.178 1632.7 -555.792 1632.89 -555.458 1633.15L-536.07 1648.24L-509.607 1637.62C-509.143 1637.44 -508.64 1637.37 -508.143 1637.43C-507.646 1637.49 -507.172 1637.67 -506.763 1637.96C-500.376 1642.45 -494.385 1643.04 -488.962 1639.69C-487.277 1638.65 -485.489 1637.73 -483.701 1636.81C-480.831 1635.5 -478.139 1633.83 -475.688 1631.84C-474.542 1630.72 -474.067 1630.26 -473.579 1629.82C-468.472 1625.22 -462.516 1623.02 -456.807 1623.61C-446.487 1624.69 -440.004 1620.25 -435.023 1615.77C-433.789 1614.65 -432.589 1613.48 -431.403 1612.26C-430.801 1611.64 -430.185 1611.05 -429.554 1610.48C-424.74 1606.07 -418.641 1603.31 -412.148 1602.61C-411.716 1602.56 -411.278 1602.6 -410.863 1602.73C-410.448 1602.86 -410.067 1603.08 -409.746 1603.37C-400.127 1612.16 -395.027 1607.57 -393.351 1606.06C-393.042 1605.78 -392.736 1605.48 -392.433 1605.16C-390.985 1603.69 -389.436 1602.32 -387.796 1601.06C-386.286 1599.92 -384.87 1598.66 -383.559 1597.29L-380.329 1593.66C-377.188 1589.97 -373.837 1586.45 -370.295 1583.14C-366.308 1579.42 -361.674 1576.47 -356.623 1574.43C-354.779 1572.88 -353.616 1570.68 -353.384 1568.28C-352.68 1560.02 -349.406 1553.67 -342.765 1547.69L-339.824 1545.05C-332.508 1538.46 -325.626 1531.76 -321.824 1522.21C-320.485 1519.2 -318.461 1516.54 -315.914 1514.45L-313.048 1511.97C-310.638 1509.89 -306.814 1508.36 -303.697 1509.59C-299.059 1511.44 -296.495 1510.34 -293.858 1507.96C-292.926 1507.13 -292.056 1506.19 -291.187 1505.26C-290.319 1504.33 -289.437 1503.39 -288.522 1502.54C-286.173 1500.11 -284.125 1497.4 -282.42 1494.48C-281.427 1492.94 -280.403 1491.36 -279.281 1489.77C-279.046 1489.44 -278.745 1489.16 -278.398 1488.95C-278.052 1488.74 -277.666 1488.6 -277.263 1488.54C-276.861 1488.48 -276.451 1488.5 -276.059 1488.61C-275.666 1488.72 -275.299 1488.9 -274.98 1489.15C-266.127 1496.12 -261.297 1493.79 -257.742 1490.58C-256.991 1489.9 -256.284 1489.17 -255.628 1488.39C-252.7 1484.96 -249.957 1481.37 -247.409 1477.65L-245.881 1475.4C-242.429 1470.31 -238.859 1465.04 -234.268 1460.91C-232.403 1459.2 -230.34 1457.73 -228.122 1456.52C-227.116 1455.99 -226.176 1455.35 -225.322 1454.6C-223.028 1452.53 -221.037 1449.24 -223.664 1440.47C-224.446 1437.86 -225.275 1435.25 -226.231 1432.21L-227.876 1426.98C-228.004 1426.57 -228.043 1426.14 -227.989 1425.71C-227.935 1425.28 -227.79 1424.87 -227.563 1424.51C-227.336 1424.14 -227.033 1423.83 -226.675 1423.59C-226.317 1423.35 -225.911 1423.19 -225.486 1423.12C-224.018 1422.89 -222.647 1422.57 -221.332 1422.27C-218.167 1421.54 -215.178 1420.85 -211.831 1421.34C-207.269 1422.01 -204.486 1421.52 -202.223 1419.65C-200.28 1418.05 -198.251 1416.55 -196.218 1415.05C-194.142 1413.52 -192.067 1411.99 -190.09 1410.33L-189.109 1409.48C-187.444 1407.98 -185.86 1406.32 -184.276 1404.66C-182.591 1402.9 -180.906 1401.14 -179.143 1399.55C-176.372 1396.87 -173.036 1394.85 -169.379 1393.63C-163.155 1391.74 -159.184 1387.95 -157.466 1382.25C-157.321 1381.77 -157.057 1381.34 -156.699 1380.98C-156.341 1380.63 -155.9 1380.37 -155.416 1380.23L-145.63 1377.42C-138.762 1375.44 -132.54 1373.65 -126.269 1371.97C-124.846 1371.59 -123.431 1371.13 -122.01 1370.67C-117.531 1369.21 -112.904 1367.72 -107.742 1368.32C-100.601 1369.14 -96.6467 1367.64 -93.3276 1363.2C-92.8074 1362.5 -92.2202 1361.85 -91.5745 1361.27C-87.1305 1357.27 -81.1484 1357.68 -75.5733 1362.37C-70.3648 1366.92 -63.6354 1369.33 -56.7256 1369.14C-47.9615 1368.78 -38.9483 1370.57 -30.229 1372.29C-20.2867 1374.27 -10.8989 1376.13 -1.93038 1375.07C0.247394 1374.82 2.43288 1375.58 4.5526 1376.32C5.41488 1376.62 6.31548 1376.93 7.23291 1377.18C7.63311 1377.29 8.00681 1377.47 8.33059 1377.73C8.65437 1377.99 8.92123 1378.31 9.11425 1378.68L10.478 1381.14C11.6133 1383.01 12.5847 1384.98 13.3812 1387.02C14.7957 1390.98 17.0578 1393.58 20.3018 1394.95C21.7912 1395.58 23.2969 1396.27 24.8068 1396.97C28.8809 1398.85 33.0954 1400.8 36.7345 1401.21C52.4342 1402.9 67.7127 1407.35 81.8672 1414.34C83.6284 1415.24 85.6121 1415.59 87.5731 1415.37C97.8337 1413.39 108.201 1416.76 118.224 1420.02L121.314 1421.02C121.906 1421.21 122.424 1421.57 122.798 1422.07C131.363 1433.42 131.363 1433.42 140.96 1435.93L142.847 1436.45C144.488 1437 146.189 1437.36 147.915 1437.5L151.748 1437.56C163.392 1437.7 175.421 1437.85 188.134 1443.7L226.546 1437.21C227.004 1437.13 227.474 1437.16 227.918 1437.3C228.362 1437.43 228.769 1437.67 229.106 1437.99L231.774 1440.58C233.525 1442.3 235.25 1444 237.089 1445.51C253.02 1458.57 256.644 1458.22 268.063 1450.61C269.669 1448.94 270.66 1447.91 271.698 1446.98C279.359 1440.08 289.282 1438.35 298.881 1436.67C302.761 1435.99 306.638 1435.32 310.33 1434.29C310.791 1434.16 311.277 1434.14 311.746 1434.24C312.215 1434.34 312.654 1434.55 313.026 1434.85L330.578 1449.09C332.116 1448.57 333.668 1448.07 335.22 1447.57C339.647 1446.28 343.972 1444.65 348.16 1442.72C357.375 1438.15 368.605 1433.57 382.001 1434.25C389.195 1434.62 394.912 1432.95 399.988 1428.98C402.812 1426.89 405.786 1425 408.886 1423.34L410.582 1422.37C415.532 1419.53 421.689 1415.99 430.819 1420.64C432.738 1421.61 436.161 1420.96 438.36 1419.77C443.656 1416.9 448.8 1413.48 453.776 1410.17L459.792 1406.21C460.376 1405.83 461.071 1405.67 461.761 1405.75C463.802 1405.78 465.361 1405.78 466.84 1406.72C476.929 1413.19 482.835 1411.06 488.6 1405.87C490.273 1404.32 491.863 1402.69 493.363 1400.97C493.755 1399.86 494.314 1398.82 495.021 1397.88C496.591 1396.07 498.023 1394.07 499.461 1392.09C501.758 1388.67 504.409 1385.5 507.37 1382.64C509.772 1380.4 512.643 1378.73 515.774 1377.74C518.906 1376.75 522.218 1376.48 525.469 1376.94C526.156 1376.14 526.585 1375.62 526.954 1375.16C530.546 1370.73 534.032 1366.19 537.358 1361.5C538.839 1359.41 540.177 1357.13 541.513 1354.85C544.47 1349.8 547.58 1344.53 552.216 1341.11C557.119 1337.49 558.859 1333.59 559.222 1324.78C559.552 1316.69 560.888 1305.13 568.648 1298.14C571.991 1295.22 576.082 1293.29 580.462 1292.57C581.158 1292.39 581.793 1292.03 582.305 1291.52C583.477 1290.42 584.352 1289.05 584.845 1287.52C586.161 1282.82 587.14 1278.03 587.778 1273.18C588.082 1271.24 588.387 1269.29 588.732 1267.37C589.555 1262.74 590.64 1257.98 594.032 1254.93C596.109 1253.12 598.739 1252.07 601.489 1251.96C602.729 1251.93 603.924 1251.49 604.878 1250.7C606.131 1249.57 606.865 1247.54 607.058 1244.67L607.338 1240.72C607.619 1236.83 607.9 1232.94 608.039 1229.01C608.141 1226.09 608.015 1223.03 607.891 1219.98C607.617 1213.26 607.336 1206.31 609.392 1200.57C612.769 1191.14 611.511 1180.85 610.18 1169.95L609.521 1164.37C608.656 1156.45 608.349 1147.16 612.64 1138.26C614.363 1134.68 614.171 1129.05 613.99 1123.6L613.896 1120.33C613.713 1117.94 613.258 1115.59 612.541 1113.31C612.09 1111.63 611.641 1109.93 611.342 1108.27L610.859 1105.69C609.321 1097.62 607.577 1088.47 614.239 1082.47C615.125 1081.68 616.094 1080.99 617.128 1080.41C617.605 1078.5 617.692 1076.51 617.386 1074.57C616.262 1067 614.675 1059.5 612.635 1052.12L611.675 1048.86C609.875 1042.95 607.831 1036.24 611.445 1031.49C616.622 1024.7 613.939 1016.1 611.098 1007C610.49 1005.05 609.881 1003.1 609.344 1001.15C608.202 997.327 606.866 993.562 605.342 989.873C604.559 987.873 603.74 985.778 602.914 983.542C602.653 982.837 602.667 982.06 602.952 981.365Z"
            fill="#FF9293"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ rotate: 0, y: -750, x: -150 }}
        whileInView={{ rotate: 2, y: -750, x: -20 }}
        className="absolute"
      >
        <svg
          width="344"
          height="287"
          viewBox="0 0 544 287"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M491.553 285.526C497.167 286.505 503.17 287.508 508.384 285.208C516.558 281.608 519.42 271.65 521.222 262.901C536.802 187.233 544.322 110.128 543.657 32.876C485.106 78.1537 431.962 130.02 385.272 187.45C364.072 134.028 340.262 81.743 313.842 30.595C310.551 24.224 305.986 17.035 298.826 16.641C291.802 16.255 286.507 22.655 282.462 28.41L183.68 168.973C136.397 93.196 66.59 34.1116 -15.9583 0C-16.3143 83.7767 -14.3963 167.523 -10.2043 251.238C155.856 276.533 326.454 256.738 491.553 285.531"
            fill="#ADDBD0"
          />
        </svg>
      </motion.div>
      <motion.div initial={{y:-200}}>
        <svg
          width="310"
          height="490"
          viewBox="0 0 510 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-44.2867 663.826C63.7557 723.055 197.588 669.147 303.603 606.374C366.833 568.932 431.022 525.161 463.364 459.179C479.702 425.85 486.806 388.892 493.748 352.436C507.351 281 520.518 204.698 492.59 137.553C469.523 82.0978 420.871 40.7045 367.785 12.6158C354.001 5.32231 338.702 -1.397 323.312 1.13142C307.2 3.77844 294.418 16.0418 284.428 28.9597C267.239 51.217 255.073 76.9319 248.765 104.337C236.181 159.214 247.445 219.204 224.802 270.753C189.169 351.874 64.4584 373.976 3.11601 310.04C-26.6281 279.036 -39.9221 235.995 -64.1835 200.536C-160.2 60.1994 -284.152 256.225 -276.224 360.366C-268.321 464.126 -128.328 617.759 -44.2919 663.828"
            fill="#FF9293"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default Section13;
