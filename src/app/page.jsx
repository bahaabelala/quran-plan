import classes from "../styles/home.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <h1 className={classes.greeting}>هنيئا لك</h1>
      <div className={classes.letter}>
        <p className={classes.sentenceBox1}>
          فقد استعملك اللّه لحفظ كتابه في الأرض، فقد قال اللّه عز وجل:
        </p>
        <p className={classes.sentenceBox2}>
          <span className={classes.quran}>
            إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
          </span>
        </p>
        <p className={classes.sentenceBox1}>
          فقد هيأ اللّه لحفظ هذا الكتاب رجال يحملونه في صدورهم فادع اللّه أن
          يعينك على إنجاز هذه المهمة العظيمة لتكون من هؤلاء الرجال، وقد قال
          اللّه تعالى:
        </p>
        <p className={classes.sentenceBox2}>
          <span className={classes.quran}>
            ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا
          </span>
        </p>
      </div>
      <button className={classes.continueBtn}>انتــقل إلى الخطة</button>
    </main>
  );
}
