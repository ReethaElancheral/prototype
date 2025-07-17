import { useEffect, useState } from "react";
import careerheroimg from '../../assets/images/careerheroimg.png'

export default function CareerHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative w-full">
      <img
        src={careerheroimg}
        alt="Hero background"
        className="w-full object-cover float-from-top"
      />
    </section>
  );
}
