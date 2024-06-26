import Style from "./CardsList.module.css";

export const NewCardsFragment = () => {
  return (
    <>
      <li className={Style["cards-list__item"]}>
        <a href="/game-id.html" className={Style["card-list__link"]}>
          <article className={Style["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
              alt=""
              className={Style["card__image"]}
            />
            <div className={Style["card__content-block"]}>
              <h3 className={Style["card__title"]}>Go Away</h3>
              <p className={Style["card__description"]}>
                Управляй автомобилем, избегая аварий и перепрыгивая препятствия
                на пути к следующему уровню.
              </p>
              <div className={Style["card__info-container"]}>
                <p className={Style["card__author"]}>
                  Автор: <span className={Style["card__accent"]}>Mahisto</span>
                </p>
                <p className={Style["card__votes"]}>
                  Голосов на сайте:{" "}
                  <span className={Style["card__accent"]}>20</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
      <li className={Style["cards-list__item"]}>
        <a href="/game-id.html" className={Style["card-list__link"]}>
          <article className={Style["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
              alt=""
              className={Style["card__image"]}
            />
            <div className={Style["card__content-block"]}>
              <h3 className={Style["card__title"]}>G.U.N.N.E.R.</h3>
              <p className={Style["card__description"]}>
                Продержись как можно дольше, отбиваясь от врагов, которых будет
                становиться всё больше.
              </p>
              <div className={Style["card__info-container"]}>
                <p className={Style["card__author"]}>
                  Автор: <span className={Style["card__accent"]}>IDKWIAm</span>
                </p>
                <p className={Style["card__votes"]}>
                  Голосов на сайте:{" "}
                  <span className={Style["card__accent"]}>10</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
      <li className={Style["cards-list__item"]}>
        <a href="/game-id.html" className={Style["card-list__link"]}>
          <article className={Style["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
              alt=""
              className={Style["card__image"]}
            />
            <div className={Style["card__content-block"]}>
              <h3 className={Style["card__title"]}>Space Terror</h3>
              <p className={Style["card__description"]}>
                Лети как можно дальше в космическом пространстве, уничтожая всё
                на своём пути.
              </p>
              <div className={Style["card__info-container"]}>
                <p className={Style["card__author"]}>
                  Автор: <span className={Style["card__accent"]}>IDKWIAm</span>
                </p>
                <p className={Style["card__votes"]}>
                  Голосов на сайте:{" "}
                  <span className={Style["card__accent"]}>20</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
      <li className={Style["cards-list__item"]}>
        <a href="/game-id.html" className={Style["card-list__link"]}>
          <article className={Style["card"]}>
            <img
              src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
              alt=""
              className={Style["card__image"]}
            />
            <div className={Style["card__content-block"]}>
              <h3 className={Style["card__title"]}>Square Slayer</h3>
              <p className={Style["card__description"]}>
                Уворачивайся и отстреливайся от озлобленных квадратов и собирай
                жизни для перехода на следующий уровень.
              </p>
              <div className={Style["card__info-container"]}>
                <p className={Style["card__author"]}>
                  Автор: <span className={Style["card__accent"]}>niclan</span>
                </p>
                <p className={Style["card__votes"]}>
                  Голосов на сайте:{" "}
                  <span className={Style["card__accent"]}>10</span>
                </p>
              </div>
            </div>
          </article>
        </a>
      </li>
    </>
  );
};
