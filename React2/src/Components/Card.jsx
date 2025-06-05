import React from 'react'

export default function Card() {
    let airpods = [
{
      id: 1,
      name: "JBL Tune Buds 2",
      color: "white",
      price: "$99.95",
      image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw467f7706/01.LS_JBL_Tune%20Buds%202_Product%20Image_Hero_White.png?sw=320&sh=320",
    },
    {
      id: 2,
      name: "JBL Tune Beam 2",
      color: "black",
      price: "$89.95 ",
      image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw7c99cb06/01.LS_JBL_Tune%20Beam%202_Product%20Image_Hero_.png?sw=535&sh=535",
    },
    {
      id: 3,
      name: "JBL Tune Flex 2",
      color: "turquoise",
      price: "$94.95",
      image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwed074b3d/01.JBL_Tune%20Flex%202_Product%20Image_Hero_Blue.png?sw=535&sh=535",
    },
    {
      id: 4,
      name: "JBL Endurance Race 2",
      color: "blue",
      price: "$79.55",
      image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw068a75f1/JBL_ENDURANCE_RACE_2_HERO_REMOVED_BLUE_029_x3.png?sw=300&sh=300",
    },
    {
      id: 5,
      name: "JBL Tour Pro 3",
      color: "latte",
      price: "$299.95",
      image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc82ad42d/01.LS_JBL_Tour%20Pro%203_Product%20Image_Case%20Open_Latte.png?sw=320&sh=320",
    },
    {
      id: 6,
      name: "JBL Vibe Flex 2",
      color: "black",
      price: "$69.95",
      image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4f184c90/01.JBL_Vibe%20Flex%202_Product%20Image_Hero_Black.png?sw=320&sh=320",
    },
     {
      id: 7,
      name: "Ultra Pods",
      color: "blizzard blue",
      price: "$60.95",
      image: "https://hammeronline.in/cdn/shop/files/04_f070ec54-bb2e-4267-9403-4138446df2bc.webp?v=1718693065&width=1080",
    },
    {
      id: 8,
      name: "Airflow Plus",
      color: "blizzard blue",
      price: "$82.60",
      image: "https://hammeronline.in/cdn/shop/files/HammerAirflowPlusBluetoothEarbuds.webp?v=1692357498&width=1080",
    },
    ];
    return (
        <div>
            <h2 className='heading'>Earbuds</h2>
            <div className='pod-card'>
                {
                    airpods.map((pod, i) => {
                        return <div className='pod_card' key={i}>
                            <img src={pod.image} alt="" />
                            <h4>{pod.name}</h4>
                            <p>{pod.price}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}