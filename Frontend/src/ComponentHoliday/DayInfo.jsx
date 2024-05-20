import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border w-[65rem]  p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className='flex flex-col  md:flex-row'>
        <p className="text-gray-600 mb-4 md:mb-0 md:mr-4">{description}</p>
        <img src={image} alt={title} className="w-full md:w-64 h-40 object-cover rounded-lg" />
      </div>
    </div>
  );
};

const DayInfo = () => {
  return (
    <div className="p-8">
      <Card
        title="Day 1"
        description="Upon your arrival in Zurich, Switzerland, you'll be greeted at the airport by a representative who will assist you with your transfer to the luxurious Baur au Lac hotel, located in the heart of Zurich. Check-in and unwind in the elegant surroundings of this historic hotel, renowned for its impeccable service and timeless charm. Spend the remainder of the day at your leisure, exploring the vibrant streets of Zurich or relaxing in the hotel's serene ambiance. In the evening, dine at one of the hotel's acclaimed restaurants, indulging in delectable Swiss cuisine paired with fine wines. Retire to your luxurious room for a restful night's sleep, ready to embark on your Swiss adventure in the days to come."
        image="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Paris1.jpg?crop=800:420&downsize=800:420"
      />
      <Card
        title="Day 2"
        description="After a delightful breakfast at the Baur au Lac hotel, immerse yourself in Zurich's rich cultural heritage. Begin your day with a visit to the Kunsthaus Zurich, where an extensive collection of European art awaits, spanning centuries of artistic expression. Wander through the charming Old Town, where medieval buildings and cobblestone streets lead you on a journey through history. Indulge in Swiss culinary delights for lunch at a traditional restaurant, savoring the flavors of cheese fondue and rösti.Enjoy the stunning caldera views and beaches in Santorini, Greece."
        image="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Louvre-Museum-05,-Paris,-France.jpg?crop=800:420&downsize=800:420"
      />
      <Card
        title="Day 3"
        description="After a delightful breakfast at the Baur au Lac hotel, embark on a scenic day trip to the charming city of Lucerne. Enjoy a leisurely drive through the picturesque Swiss countryside, passing by rolling hills, serene lakes, and quaint villages along the way. Upon arrival in Lucerne, explore the iconic Chapel Bridge, adorned with historic paintings and offering breathtaking views of the surrounding mountains and Lake Lucerne. Wander through the medieval Old Town, marveling at its well-preserved architecture and lively atmosphere. Indulge in a delicious Swiss lunch at a local restaurant before taking a relaxing boat cruise on Lake Lucerne, admiring the stunning scenery from the water. Conclude your day trip with a visit to the Lion Monument, a poignant tribute to Swiss guards who lost their lives during the French Revolution. Return to Zurich in the evening, filled with memories of your enchanting day in Lucerne."
        image="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/paris2.jpg?crop=800:420&downsize=800:420"
      />
      <Card
        title="Day 4"
        description="As you traverse the picturesque French countryside, the vibrant mustard fields paint a vivid backdrop, while the rolling hills of Burgundy's renowned vineyards enchant with their rustic charm. Crossing into Switzerland, the majestic Alps rise on the horizon, their snow-capped peaks standing sentinel over the breathtaking landscape. After a day of awe-inspiring vistas and winding roads, the warm hospitality of Hotel Central Engelberg welcomes you with an Indian dinner, a tantalizing fusion of flavors to end the day on a satisfying note. Nestled in the heart of Engelberg, this haven offers a cozy retreat, promising a restful night's sleep before another day of exploration."
        image="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Louvre-Museum-05,-Paris,-France.jpg?crop=800:420&downsize=800:420"
      />
      <Card
        title="Day 5"
        description="Indulge in a delightful morning repose after breakfast, savouring the serene atmosphere or embark on an optional tour to explore the picturesque locales of Jungfrau and Interlaken. Wander through the charming streets of Interlaken, soaking in the beauty of its quaint surroundings. Then, brace yourself for an exhilarating ascent to Jungfraujoch, known as the 'Top of Europe,' where a snowy wonderland awaits. Engage in thrilling adventures amidst the pristine white landscapes, creating unforgettable memories against the backdrop of majestic alpine peaks. Whether basking in leisure or embracing the thrill of exploration, each moment promises to be a captivating experience in this enchanting Swiss paradise."
        image="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/paris4.jpg?crop=800:420&downsize=800:420"
      />
      <Card
        title="Day 6"
        description="Start your day with a choice: relish a leisurely morning or embark on an exhilarating adventure to Mt. Titlis. Opt for the latter and brace yourself for a breathtaking 35-minute ride offering panoramic views that will leave you in awe. After the adrenaline rush, retreat to the comfort of Novotel Airport Messe, where relaxation meets modern convenience. Unwind in stylish accommodations and recharge for the next leg of your journey, knowing that every comfort awaits your return. Whether you seek thrills or tranquility, this experience promises the perfect blend of excitement and relaxation."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4Z5EnSM_hit8wtl1cdxuZ-W7vEUIbMSnBFeeNi4jEU1M17ceelxKL7jKwgLqlQ3NTHM&usqp=CAU"
      />
      <Card
        title="Day 7"
        description="Embark on a picturesque journey from Zurich to Frankfurt, winding through the enchanting Black Forest. Pause at Titisee to immerse yourself in the rich heritage of cuckoo clocks, discovering their intricate craftsmanship and timeless charm. Indulge in leisurely moments amidst the tranquil surroundings, savoring the essence of this renowned region. Delight your palate with a decadent slice of Black Forest Cake, a culinary masterpiece synonymous with the area's culinary delights. Resume your travels refreshed and enriched, as you carry the memories of this scenic escapade to Frankfurt."
        image="https://www.gtholidays.in/wp-content/uploads/2019/07/paris-tour-package-870x555.jpg"
      />
    </div>
  );
};

export default DayInfo;
