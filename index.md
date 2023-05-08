---
layout: page
title: Kiddo Blog
permalink: /
---
<main class="page landing-page">
    <section class="clean-block clean-hero" style="background-image: url(&quot;assets/img/page/page_background/background.jpg&quot;);color: rgba(0,0,0,0.8);background-attachment: fixed;background-position: center;">
            <div class="text">
                <h2 style="color: #eeeeee!important">Jurgen</h2>
                <p>Viết ba lăng nhăng chia sẻ sự đời</p><a class="btn btn-outline-light btn-lg" role="button" href="{{site.baseurl}}/blog-list/">{% t postList %}</a></div>
        </section>
    <section id="about" class="clean-block about-us">
        <div class="container">
            <div class="block-heading">
                <h2 class="text-info" style="color: #3e0101!important;">{% t about %}</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
                    <div class="card clean-card text-center"><img class="card-img-top img-fluid w-100 d-block d-flex flex-column justify-content-lg-center align-items-lg-center" style="object-fit: cover; object-position: center; height: 100%" src="assets/img/avatars/Profile-2.JPG"></div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card clean-card text-center">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center align-content-center info" style="height: 415.141px;">
                            <h4 class="card-title" style="color: #000000!important">{% t basicInfo.name %}</h4>
                            <h5 class="card-title">Jurgen</h5>
                            <p class="text-justify card-text">{% t basicInfo.bio %}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>