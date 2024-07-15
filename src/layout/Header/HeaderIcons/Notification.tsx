import { useState } from 'react';
import BellIcon from '../../../assets/icons/Bellicon';
import SettingsIcons from '../../../assets/icons/SettingsIcon';
import Btn from '../../../Components/Button';
import Drawer from '../../../Components/drawer/drawer';
 
const Notification = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
 
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
 
  return (
<>
<button onClick={toggleDrawer}>
<BellIcon />
</button>
 
      <Drawer onClose={toggleDrawer} open={isDrawerOpen} position="right">
<div className="flex items-center justify-between p-5">
<h5 className="text-lg font-semibold text-gray-700">Notification</h5>
<div className="flex gap-2 items-center justify-end">
<div>
<SettingsIcons size="sm" />
</div>
<button
              onClick={toggleDrawer}
              className="text-textColor font-normal hover:text-gray-700 text-3xl -mt-1"
>
&times;
</button>
</div>
</div>
<div className="p-4">
<div className="space-y-4">
            {[
              {
                imgSrc: "https://s3-alpha-sig.figma.com/img/2fd1/0ec0/20560c9d065063d514849db74893d9aa?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fX0-Tk8qFUIFhPfaq9rbvEHGTwvK8fND-QMiobpOgY5EdkyQIc1Uuero5P5lPMV-OrRDwoSI6QzfFqvnJ8nef9GXbfDiBeUXaHAiouwKYFi~dFuUOuVM5NgJIMbF8JaQZy3EGU42kOMb781Dq2G1wL1RG~LJnypJVtGnhlcJ5PNAUVUbEWqPp81aubSd9Nv3hNvHtIjWp82~w23yggTSDXKnL582hluACBsoTU61m~BgrZdp4Xd2e0rfTlurzwasjwY5gBGOcUMoad8ziOu0G6-YtcYnf8Ukvbrp6hjhrZJggA-HvGnxtVREilyFvak9gz~jvSfX27w42agHQZmckg__",
                title: "Out of Stock",
                count: "Item [Product Name] is now out of stock. Please restock as soon as possible.",
                time: "Friday 10:04am",
                date: "Jun 20, 2024",
              },
              {
                imgSrc: "https://s3-alpha-sig.figma.com/img/0404/8874/bcd210f64cacfe712297b84b5ccf2167?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mBdMeWe1phM64aftLfzxKOYCg2KGgQjPoKJTI1smGDxpMcTLhWXPMonvASd1JhFtAWR9zoF6GqUrTemShPT6RGMfnPMvHnp6ODxOj8--MoIJcyRe0Pn17Ijs9m9urHqnyRiK2NI~QxLHsa~KMW2bjZvI4pbl4uitBLIguGTwcOPW7Z3HzL030~SsS1HDk1k6sbW~avAF7qa0sYSEaQ-HvlKwGNEswRP~ynxId2JgBxGhfs2qmiMAhIEbF-8lb9OFfvalfn8OafYUHY7~enUEXNH6wl1d4I5wx5H3~qEmvOFCBXbliNt9zIX2-myD2H48D~LrtL~5MB29NR0SaVZD7w__",
                title: "Restock Reminder",
                count: "Item [Product Name] is now out of stock. Please restock as soon as possible.",
                time: "Friday 10:04am",
                date: "Jun 20, 2024",
              },
              {
                imgSrc: "https://s3-alpha-sig.figma.com/img/6891/1fe8/3d9b032daa1230ceaa3e8160ca53dbad?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGPzrzkA-laRuBGATDbvDPzvk25D9s2~rC7FUFhbLJ5mBi~aWxsbIDKRhAtjcemomMun3b7QQeusaUg2xseSXg5j1ax1ejY9vyxh-juaoPRnxCY4GONq7QEgB9zDKCZHK1fuYa1Z6evjIAsQUDtpVE61yMEVF-SU1Y8Q3RXMK5ujRyO6ArMQzf6Q4Hdqm7ip75eDwsutoe26PcPgtd1FIftuObo33BLcfyZliURgYDzWmJAHQ63CdMk8dJfBu5WUIIhrfWjlfJm-haCIGGHNX8Vb-2-~0MnidXgf2qe8WPMt-Fmy7Za9kbtOxDjHyV33P~vpwuthhJXOZbwVV~Sf3g__",
                title: "Out of Stock",
                count: "Item [Product Name] is now out of stock. Please restock as soon as possible.",
                time: "Friday 10:04am",
                date: "Jun 20, 2024",
              },
            ].map((notification, index) => (
<div key={index} className="p-4 flex border border-slate-200 rounded-md shadow-sm">
<div className="mr-4">
<img
                    src={notification.imgSrc}
                    alt=""
                    className="h-[40px] w-[50px]"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
</div>
<div className="flex-grow">
<h5 className="font-bold text-sm text-gray-700">{notification.title}</h5>
<p className="text-xs text-gray-700">{notification.count}</p>
<div className="flex justify-between mt-2 font-semibold text-gray-700">
<p className="text-xs">{notification.time}</p>
<p className="text-xs">{notification.date}</p>
</div>
</div>
</div>
            ))}
</div>
</div>
<div className="flex justify-end me-3 mt-5">
<Btn variant="secondary" size="lg">
            View all notifications
</Btn>
</div>
</Drawer>
</>
  );
};
 
export default Notification;