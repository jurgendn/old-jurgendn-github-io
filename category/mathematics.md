---
layout: page
title: Mathematics
permalink: /category/mathematics
---

<main class="page blog-post-list">
    <section class="clean-block clean-blog-list dark">
        <div class="container">
            <header style="
          background-image: url('/assets/img/page/page_background/mathematics_backgr.jpg');
          background-size: cover;background-position: bottom;background-attachment: fixed;background-repeat: no-repeat;height: 50vh;margin-top: 0px;
        ">
                <div class="d-flex flex-column justify-content-center justify-content-lg-center align-items-lg-center block-heading" style="background-size: cover;background-position: center;background-color: rgba(0,33,7,0.64);margin-top: 0px;height: 50vh;">
                    <h2 class="text-uppercase text-info" style="
              margin-bottom: 20px;
              margin-top: 15px;
              color: rgb(255, 255, 255);
              font-weight: 800;
              font-size: 40px;
            ">
                        Mathematics
                    </h2>
                    <p class="text-center" style="
              margin-bottom: 65px;
              color: rgb(255, 255, 255);
              font-weight: 900;
              font-style: italic;
            ">
                        Trên thông tinh văn dưới tường địa lí<br />DỐT MỖI TOÁN
                    </p>
                </div>
            </header>
            {% for category in site.categories %}
            {% if category[0] == "mathematics" %}
      <h3 style="margin:50px 0px 20px 0px; 
                text-transform: uppercase;
                font-family: Montserrat, sans-serif;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.5;
                color: #212529;
                text-align: left;"
      >{{category[0]}}</h3>
      <div class="block-content">
        {% for post in category[1] %}
            {% if post.img_url %}
                {% assign img_url = post.img_url %}
            {% else %}
                {% assign img_url = "/assets/img/page/post_thumbnail/mathematics_default_thumbnail.jpeg" %}
            {% endif %}
            <div class="clean-blog-post">
                <div class="row">
                    <div class="col-lg-5 d-flex flex-column justify-content-xl-center align-items-xl-center">
                        <img class="rounded img-fluid" src="{{img_url}}" style="
                    background-position: center;
                    background-size: auto;
                    max-height: 170px;
                  " />
                    </div>
                    <div class="col-lg-7 d-flex flex-column justify-content-xl-center">
                        <h3><a class="list-group-item list-group-item-action"
                                href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                        <div class="info">
                            <span class="text-muted">{{post.date | date: "%d-%m-%Y"}} - <a href="{{site.baseurl}}/#about">by Jurgendn</a></span>
                        </div>
                        <p>{{post.description}}</p>
                        <button class="btn btn-outline-primary btn-sm" type="button" style="width: 100px;"><a
                                href="{{ post.url | relative_url }}">
                                Đọc tiếp</a>
                        </button>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        {% endif %}
      {% endfor %}
        </div>
    </section>
</main>