import Twemoji from '@/components/Twemoji.js'

export default function Greeting(locale) {
  if (locale === 'en') {
    return (
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Xin chào <i className="twa twa-waving-hand"></i>
        </h1>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
          Mình là <span className="font-medium">Tuấn Anh (Leo)</span> -{' '}
          <span className="font-medium">Shopify Software Engineer</span> tại{' '}
          <a
            href="https://insights.is"
            target="_blank"
            className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-400"
            rel="noreferrer"
          >
            Insights Studio
          </a>
          .
          <p className="my-4">
            Mình sở hữu chiếc <Twemoji emoji="desktop computer" /> đầu tiên năm lớp 7 và đã dành rất
            nhiều thời gian cho máy tính kể từ đó! Chỉ vài năm sau mình đã thành thạo việc chơi AOE,
            CS và soạn giáo án trên MS Word cho chú <Twemoji emoji="partying-face" />
            <Twemoji emoji="partying-face" />
          </p>
          <p className="my-4">
            Mình làm quen và hứng thú với lập trình từ cuối năm 2016, từ đó đến nay mình đã làm việc
            ở vài công ty, lớn có, nhỏ có. Blog này là nơi note lại những kiến thức mà mình học được
            và những điều hay ho mình trải nghiệm khi đi làm!
          </p>
          <p className="my-4">
            Happy reading <Twemoji emoji="clinking-beer-mugs" />
          </p>
        </p>
      </div>
    )
  }

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Xin chào <i className="twa twa-waving-hand"></i>
      </h1>
      <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
        Mình là <span className="font-medium">Tuấn Anh (Leo)</span> -{' '}
        <span className="font-medium">Shopify Software Engineer</span> tại{' '}
        <a
          href="https://insights.is"
          target="_blank"
          className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-400"
          rel="noreferrer"
        >
          Insights Studio
        </a>
        .
        <p className="my-4">
          Mình sở hữu chiếc <Twemoji emoji="desktop computer" /> đầu tiên năm lớp 7 và đã dành rất
          nhiều thời gian cho máy tính kể từ đó! Chỉ vài năm sau mình đã thành thạo việc chơi AOE,
          CS và soạn giáo án trên MS Word cho chú <Twemoji emoji="partying-face" />
          <Twemoji emoji="partying-face" />
        </p>
        <p className="my-4">
          Mình làm quen và hứng thú với lập trình từ cuối năm 2016, từ đó đến nay mình đã làm việc ở
          vài công ty, lớn có, nhỏ có. Blog này là nơi note lại những kiến thức mà mình học được và
          những điều hay ho mình trải nghiệm khi đi làm!
        </p>
        <p className="my-4">
          Happy reading <Twemoji emoji="clinking-beer-mugs" />
        </p>
      </p>
    </div>
  )
}
