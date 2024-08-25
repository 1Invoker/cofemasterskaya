import React, { useState } from 'react';
import '../styles/ArticleList.css';
import brushIssueImage from "./assets/images/simple-gallery-carousel-img-1.jpg";
import noStartImage from "./assets/images/images (1).jpeg";
import master from "./assets/images/unnamed.jpg";

const articles = [
  {
    title: "Как избежать поломок стиральной машины",
    content: (
      <>
        <p>
          Стиральная машина – это один из самых востребованных бытовых приборов, который облегчает нашу жизнь, избавляя нас от ручной стирки. Однако, как и любая техника, она требует ухода и правильной эксплуатации, чтобы служить долго и без поломок. 
          Один из главных аспектов, на который стоит обратить внимание, — это регулярное техническое обслуживание. Многие пользователи забывают о том, что стиральной машине требуется чистка не только снаружи, но и внутри. Например, необходимо регулярно чистить фильтры для воды, чтобы избежать накопления накипи и засоров. 
          Также важно периодически проверять барабан на предмет остатков ткани или мелких предметов, которые могут попасть в стиральную машину с одеждой. Это поможет избежать засоров и повреждений барабана. 
        </p>
        <p>
          Не менее важно следить за уровнем загруженности машины. Перегрузка стиральной машины может привести к серьезным повреждениям двигателя и барабана. Чтобы этого избежать, необходимо соблюдать рекомендации производителя по максимальной загрузке, указанные в инструкции. Это особенно важно для машин с фронтальной загрузкой, так как их барабаны чаще всего подвержены перегрузкам.
          Использование качественных моющих средств также играет важную роль в продлении срока службы стиральной машины. Дешевые порошки и гели могут содержать агрессивные химические компоненты, которые со временем разрушают внутренние части машины. Рекомендуется использовать только проверенные и сертифицированные средства, а также добавлять смягчители воды, если в вашем регионе она жесткая. 
        </p>
        <p>
          Стоит отметить, что после каждой стирки нужно оставлять дверцу стиральной машины открытой на некоторое время, чтобы она могла проветриться. Это поможет предотвратить образование плесени и неприятных запахов внутри барабана. Также не забывайте о чистке резиновых уплотнителей и дозаторов для моющих средств.
          Подводя итог, можно сказать, что регулярное техническое обслуживание и правильная эксплуатация стиральной машины могут существенно продлить её срок службы и избежать частых поломок. Придерживайтесь этих простых рекомендаций, и ваша техника прослужит вам долгие годы, не доставляя никаких проблем.
        </p>
      </>
    ),
    image: brushIssueImage,
  },
  {
    title: "Топ-5 причин поломок стиральных машин",
    content: (
      <>
        <p>
          Стиральные машины, как и любая другая бытовая техника, подвержены износу и поломкам. Важно знать основные причины этих неисправностей, чтобы своевременно предпринимать меры и избегать дорогостоящих ремонтов. Рассмотрим топ-5 самых распространенных причин поломок стиральных машин и способы их предотвращения.
          1. **Износ подшипников барабана.** Подшипники барабана со временем изнашиваются, особенно если машина используется интенсивно. Признаками износа подшипников могут быть сильный шум при вращении барабана и вибрация машины. Чтобы продлить срок службы подшипников, старайтесь не перегружать машину и избегать стирки тяжелых предметов, таких как ковры и одеяла, которые могут вызывать дисбаланс.
        </p>
        <p>
          2. **Повреждение уплотнительных манжет.** Резиновые уплотнители, расположенные вокруг дверцы стиральной машины, могут со временем трескаться или рваться, что приводит к утечкам воды. Чтобы предотвратить это, регулярно осматривайте уплотнители на наличие повреждений и чистите их от грязи и остатков моющих средств.
          3. **Сбой электроники.** Современные стиральные машины оснащены сложной электроникой, которая может выходить из строя по разным причинам: перепады напряжения, влага, физическое воздействие. Для предотвращения сбоев электроники рекомендуется использовать стабилизаторы напряжения и избегать попадания воды на элементы управления.
        </p>
        <p>
          4. **Закупорка дренажной системы.** Закупорка дренажной системы происходит, когда фильтры и насосы забиваются мусором, ворсом или мелкими предметами, которые попадают в машину с одеждой. Это может привести к тому, что вода не будет сливаться, и машина остановится. Чтобы избежать этого, регулярно очищайте фильтры и проверяйте дренажный насос.
          5. **Перегрузка машины.** Перегрузка стиральной машины – одна из самых частых причин её поломок. При чрезмерной загрузке страдает не только барабан, но и двигатель, ремни и подшипники. Следует всегда придерживаться рекомендаций производителя по максимальной загрузке, чтобы избежать этих проблем.
        </p>
        <p>
          Чтобы избежать поломок стиральной машины, необходимо не только соблюдать рекомендации по её эксплуатации, но и регулярно проводить профилактическое обслуживание. Это включает в себя чистку фильтров, проверку состояния уплотнителей и подшипников, а также использование качественных моющих средств. Помните, что лучше предотвратить проблему, чем потом заниматься дорогостоящим ремонтом.
        </p>
      </>
    ),
    image: noStartImage,
  },
  {
    title: "Когда стоит вызывать мастера по ремонту?",
    content: (
      <>
        <p>
          Иногда пользователи стиральных машин сталкиваются с проблемами, которые они пытаются решить самостоятельно. Однако есть ситуации, когда лучше всего обратиться к профессионалу, чтобы избежать дальнейших проблем и дорогостоящего ремонта. Рассмотрим основные признаки, указывающие на необходимость вызова мастера по ремонту стиральной машины.
          1. **Стиральная машина не включается.** Если ваша стиральная машина не реагирует на нажатие кнопки питания, это может быть связано с проблемами в электропитании, неисправностью платы управления или кнопок. Попытка самостоятельно починить эти элементы может привести к их окончательной поломке, поэтому лучше сразу вызвать специалиста.
        </p>
        <p>
          2. **Не сливается вода.** Если стиральная машина не сливает воду после стирки, это может указывать на закупорку дренажной системы или неисправность насоса. В этом случае следует проверить фильтры и шланги на наличие засоров. Если проблема не решается, необходима помощь мастера.
          3. **Не крутится барабан.** Причинами того, что барабан не вращается, могут быть сломанные ремни, неисправные подшипники или проблемы с двигателем. Без соответствующих навыков и инструментов такие поломки сложно устранить самостоятельно, поэтому лучше доверить ремонт профессионалу.
        </p>
        <p>
          4. **Появляется сильный шум при работе.** Сильный шум и вибрация при работе стиральной машины могут быть вызваны износом подшипников, амортизаторов или дисбалансом барабана. Игнорирование этих симптомов может привести к более серьезным повреждениям, поэтому лучше сразу вызвать мастера для диагностики и ремонта.
          5. **Присутствуют утечки воды.** Утечки воды из стиральной машины – это серьёзная проблема, которая может привести к затоплению квартиры и порче имущества. Если вы заметили утечку, проверьте уплотнители и шланги на наличие трещин и повреждений. Если проблема не устраняется, лучше вызвать специалиста.
        </p>
        <p>
          Подводя итог, можно сказать, что своевременный вызов мастера по ремонту стиральной машины может предотвратить серьезные проблемы и сэкономить вам деньги и время. Если вы заметили один из описанных выше признаков неисправности, не откладывайте визит профессионала. Он поможет выявить и устранить проблему, обеспечив долгую и бесперебойную работу вашей стиральной машины.
        </p>
      </>
    ),
    image: master,
  }
];

const ArticleList = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="article-list-container">
      {!selectedArticle ? (
        articles.map((article, index) => (
          <div
            className="article-item"
            key={index}
            onClick={() => setSelectedArticle(article)}
          >
            <div className="article-text">
              <h2>{article.title}</h2>
              <p>{article.content.props.children[0].props.children.slice(0, 80)}...</p>
            </div>
            <div className="article-image">
              <img src={article.image} alt={article.title} className="article-img" />
            </div>
          </div>
        ))
      ) : (
        <div className="article-detail">
          <div className="article-text">
            <h2>{selectedArticle.title}</h2>
            {selectedArticle.content}
            <button className="back-button" onClick={() => setSelectedArticle(null)}>
              Назад к статьям
            </button>
          </div>
          <div className="article-image">
            <img src={selectedArticle.image} alt={selectedArticle.title} className="article-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
