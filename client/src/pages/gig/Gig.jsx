import React from "react";
import "./Gig.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

// Import Swiper styles

export default function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  //console.log(data);

  const userId = data?.userId;
  //console.log(userId)

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/user/${data.userId}`).then((res) => {
        return res.data;
      }),
    //when run  only userId exist
    enabled: !!userId,
  });
  //

  //console.log(dataUser);

  return (
    <div className="gig">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong..!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">Liverr Graphics & Design </span>
            <h1>{data.title}</h1>
            <div className="user">
              {isLoadingUser ? (
                "Loadinn  g"
              ) : errorUser ? (
                "Something Went wrong"
              ) : (
                <div>
                  <img className="pp" src={dataUser.img} alt="" />
                  <span>{dataUser.username}</span>
                </div>
              )}

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>
                  <span>
                    {!isNaN(data.totalStars / data.starNumber) &&
                      Math.round(data.totalStars / data.starNumber)}
                  </span>
                </span>
              </div>
            </div>
            <Swiper className="mySwiper">
              <SwiperSlide>
                {data.images.map((img) => {
                  <img src={img} alt="" />;
                })}
              </SwiperSlide>
            </Swiper>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="seller">
              <h2>About The Seller</h2>

              <div className="user">
                {isLoadingUser ? (
                  "Loading"
                ) : errorUser ? (
                  "somethng went wrong"
                ) : (
                  <img src={dataUser.img || "/img/man.png"} alt="" />
                )}

                <div className="info">
                  {isLoadingUser ? (
                    "Loading"
                  ) : errorUser ? (
                    "somethng went wrong"
                  ) : (
                    <span>{dataUser.username}</span>
                  )}

                  <div className="stars">
                    <span>
                      {!isNaN(data.totalStars / data.starNumber) && (
                        <div className="stars">
                          {Array(Math.round(data.totalStars / data.starNumber))
                            //  The fill() method fills specified elements in an array with a value.
                            .fill()
                            .map((item, i) => (
                              <img src="/img/star.png" alt="" key={i} />
                            ))}
                          <span>
                            {Math.round(data.totalStars / data.starNumber)}
                          </span>
                        </div>
                      )}
                    </span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    {isLoadingUser ? (
                      "Loading"
                    ) : errorUser ? (
                      "somethng went wrong"
                    ) : (
                      <span className="desc">{dataUser.country}</span>
                    )}
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>
                  {isLoadingUser ? (
                    "Loading"
                  ) : errorUser ? (
                    "somethng went wrong"
                  ) : (
                    <span className="desc">{dataUser.desc}</span>
                  )}
                </p>
              </div>
                </div>
                
            <Reviews gigId={id} />
          </div>

          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{[data.shortDesc]}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryDate}</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => {
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>;
              })}
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}
