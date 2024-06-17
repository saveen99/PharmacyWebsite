<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- ==============fontawesome==================== -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <!-- header -->
    <div class="container-fluid header px-5">
        <nav class="navbar navbar-expand-lg  d-lg-block ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="assets/img/logo (1).png" alt="">
                </a>
                <button class="navbar-toggler d-none d-lg-block" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <a class=" d-lg-none d-md-block d-sm-block" data-bs-toggle="offcanvas" href="#offcanvasExample"
                    role="button" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-bars text-dark fs-5"></i>
                </a>
                <div class="login-btn d-none d-lg-block">
                    <a class="btn btn-md circle btn-dark" href="#resume">My Resume</a>
                </div>
            </div>
        </nav>
    </div>
    <!-- header -->
    <!-- ==========ofcanvas================= -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <a class="navbar-brand" href="#">
                <img src="assets/img/logo (1).png" width="150px" class="ms-3" alt="">
            </a>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item border-bottom">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item border-bottom">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item border-bottom">
                    <a class="nav-link" href="#">Project</a>
                </li>
                <li class="nav-item border-bottom">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item border-bottom">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <li class="header-btn login-btn text-center">
                <a class="btn btn-md circle btn-dark" href="#resume">My Resume</a>
            </li>
        </div>
    </div>
    <!-- ==========ofcanvas================= -->
    <!-- banner -->
    <div class="container-fluid px-5 banner">
        <div class="row align-items-center">
            <div class="col-lg-8 mx-auto info">
                <h1 class="text-invisible">WELCOME</h1>
                <h2>Hey <img src="assets/img/4.png" alt="Icon"> I'm <span>Dream Coder</span></h2>
                <h3 class="title">
                    <span class="header-caption" id="page-top">
                        <!-- type headline start-->
                        <span class="cd-headline clip is-full-width">
                            <!-- ROTATING TEXT -->
                            <span class="cd-words-wrapper fw-bold" id="typed-text">

                            </span>
                        </span>
                        <!-- type headline end -->
                    </span>
                </h3>
                <div class="button mt-3">
                    <a class="btn btn-md circle btn-dark" href="#resume">My Resume</a>
                </div>
            </div>
        </div>
    </div>
    <!-- banner -->
    <!-- info -->
    <div class="container-fluid px-5 ab_info">
        <div class="row align-center">
            <div class="about-style-six col-lg-5">
                <div class="thumb">
                    <img class="wow fadeInUp" src="assets/img/3.png" alt="Thumb"
                        style="visibility: visible; animation-name: fadeInUp;">
                </div>
            </div>
            <div class="about-style-six col-lg-6 offset-lg-1">
                <h4 class="sub-title">About Me</h4>
                <h2 class="title">I can develop <br> that help people</h2>
                <p>
                    Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my
                    waking hours for the last ten years designing, programming and operating WordPress sites. One of my
                    specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to
                    produce sites with a unique.
                </p>
                <div class="skill-list">
                    <ul>
                        <li>
                            <div class="icon">
                                <i class="fab fa-wordpress"></i>
                            </div>
                            <div class="content">
                                <h4>Professional WordPress Developer</h4>
                                <span>Top Rated – Upwork</span>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div class="content">
                                <h4>Senior HTML Developer</h4>
                                <span>Level Two Seller - Fiverr</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- info -->
    <!-- about -->
    <div class="container-fluid px-5 about_info">
        <div class="site-heading text-center">
            <h4 class="sub-title">My Expertise</h4>
            <h2 class="title">What I Do </h2>
            <div class="devider"></div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="icon-box icon-top align-center">
                    <div class="icon text-center mx-auto">
                        <img src="assets/img/html.png" alt="">
                    </div>
                    <div class="icon-desc text-center mt-3">
                        <h4>HTML</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla feugiat, pulvinar
                            nunc sed, sollicitudin leo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="icon-box icon-top align-center">
                    <div class="icon text-center mx-auto">
                        <img src="assets/img/css.png" alt="">
                    </div>
                    <div class="icon-desc text-center mt-3">
                        <h4>CSS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla feugiat, pulvinar
                            nunc sed, sollicitudin leo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp">
                <div class="icon-box icon-top align-center">
                    <div class="icon text-center mx-auto">
                        <img src="assets/img/w3c.png" alt="">
                    </div>
                    <div class="icon-desc text-center mt-3">
                        <h4>W3 Validation</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla feugiat, pulvinar
                            nunc sed, sollicitudin leo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp">
                <div class="icon-box icon-top align-center">
                    <div class="icon text-center mx-auto">
                        <img src="assets/img/bootstrap.png" alt="">
                    </div>
                    <div class="icon-desc text-center mt-3">
                        <h4>Bootstrap</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla feugiat, pulvinar
                            nunc sed, sollicitudin leo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp">
                <div class="icon-box icon-top align-center">
                    <div class="icon text-center mx-auto">
                        <img src="assets/img/speed.png" alt="">
                    </div>
                    <div class="icon-desc text-center mt-3">
                        <h4>Light Weight & Fast</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla feugiat, pulvinar
                            nunc sed, sollicitudin leo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 wow fadeInUp">
                <div class="icon-box icon-top align-center">
                    <div class="icon text-center mx-auto">
                        <img src="assets/img/responsive.png" alt="">
                    </div>
                    <div class="icon-desc text-center mt-3">
                        <h4>Unique Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla feugiat, pulvinar
                            nunc sed, sollicitudin leo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- about -->
    <!-- skills -->
    <div class="container-fluid px-5 mt-5 skills">
        <div class="experience-content-box">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <div class="nav nav-tabs text-center resume-tab-navs" id="nav-tab" role="tablist">

                        <button class="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1"
                            type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            Biography <strong>01</strong>
                        </button>
                        <button class="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button"
                            role="tab" aria-controls="tab2" aria-selected="false">
                            Skills <strong>02</strong>
                        </button>
                        <button class="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button"
                            role="tab" aria-controls="tab3" aria-selected="false">
                            Education <strong>03</strong>
                        </button>

                    </div>

                    <div class="tab-content resume-tab-content" id="nav-tabContent">
                        <!-- Single Item -->
                        <div class="tab-pane fade active show" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="biography-table">
                                        <li>
                                            <h5>Name</h5>
                                            <p>
                                                Saveen Maduranga
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Birthday</h5>
                                            <p>
                                                24 March, 1994
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Age</h5>
                                            <p>
                                                29
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Address</h5>
                                            <p>
                                                Street Oswego NY 13126 USA
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Email</h5>
                                            <p>
                                                easton@gmail.com
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Phone</h5>
                                            <p>
                                                +(778)33444564
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Skype</h5>
                                            <p>
                                                program540
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Freelance</h5>
                                            <p>
                                                Available
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->

                        <!-- Single Item -->
                        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                            <div class="row align-center">
                                <div class="col-lg-12">
                                    <ul class="skill-table">
                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-laravel"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Object oriented programming</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>75%</h5>
                                                        <div class="progress" style="opacity: 1; left: 0px;">
                                                            <div class="progress-bar" role="progressbar" data-width="75"
                                                                style="width: 75%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-react"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Front-End with React</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>84%</h5>
                                                        <div class="progress" style="opacity: 1; left: 0px;">
                                                            <div class="progress-bar" role="progressbar" data-width="84"
                                                                style="width: 84%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-html5"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Advance frontend development</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>92%</h5>
                                                        <div class="progress" style="opacity: 1; left: 0px;">
                                                            <div class="progress-bar" role="progressbar" data-width="92"
                                                                style="width: 92%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->

                        <!-- Single Item -->
                        <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="education-table">
                                        <li>
                                            <h4 class="text-dark">AS - Science &amp; Information</h4>
                                            <h5>SuperKing College</h5>
                                            <span>2001 - 2005</span>
                                            <p>
                                                The training provided by universities in order to prepare people to work
                                                in various sectors of the economy or areas of culture.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>BSc in Computer Science</h4>
                                            <h5>University of DVI </h5>
                                            <span>2006 - 2010</span>
                                            <p>
                                                The training provided by universities in order to prepare people to work
                                                in various sectors of the economy or areas of culture.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Web Developer &amp; Trainer</h4>
                                            <h5>Apple Developer Team</h5>
                                            <span>2012 - 2016</span>
                                            <p>
                                                The training provided by universities in order to prepare people to work
                                                in various sectors of the economy or areas of culture.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Sr. Software Engineer</h4>
                                            <h5>Google Out Tech</h5>
                                            <span>2017 - Present</span>
                                            <p>
                                                The training provided by universities in order to prepare people to work
                                                in various sectors of the economy or areas of culture.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->


                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- skills -->
    <!-- availble -->
    <div class="container-fluid px-5 freelance">
        <div class="work-available-area text-center box-layout bg-light default-padding">
            <div class="shape-right-top-mini">
                <img src="assets/img/16.png" alt="illustration">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="work-available">
                            <h2 class="title">I'm <strong>available</strong> for <br> freelance work</h2>
                            <a class="btn btn-md circle btn-theme smooth-menu" href="#contact">Hire me now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- availble -->
    <!-- contact -->
    <div class="container-fluid px-5 contact">
        <div class="contact-content">
            <div class="row align-center">


                <div class="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                    <div class="form-box">
                        <h2>Let's talk?</h2>
                        <p>
                            It's all about the humans behind a brand and those experiencing it, br we're right there. In
                            the middle performance quick.
                        </p>
                        <form action="assets/mail/contact.php" method="POST" class="contact-form">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name"
                                            type="text">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email*"
                                            type="email">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input class="form-control" id="phone" name="phone" placeholder="Phone"
                                            type="text">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group comments">
                                        <textarea class="form-control" id="comments" name="comments"
                                            placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <a class="btn btn-md circle btn-theme smooth-menu" href="#contact">Send Message</a>
                                </div>
                            </div>
                            <!-- Alert Message -->
                            <div class="col-lg-12 alert-notification">
                                <div id="message" class="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4 offset-lg-1 info">
                    <div class="content">
                        <ul>
                            <li class="contact-info-list wow fadeInUp"
                                style="visibility: visible; animation-name: fadeInUp;">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="info">
                                    <p>Our Email</p>
                                    <h5>
                                        <a href="mailto:endlessravenonline@gmail.com">endlessravenonline@gmail.com</a>
                                    </h5>
                                </div>
                            </li>
                            <li class="contact-info-list wow fadeInUp" data-wow-delay="300ms"
                                style="visibility: visible; animation-delay: 300ms; animation-name: fadeInUp;">
                                <div class="icon">
                                    <i class="fas fa-map"></i>
                                </div>
                                <div class="info">
                                    <p>Address</p>
                                    <h5>
                                        22 Baker Street, <br> London, United Kingdom, <br> W1U 3BW
                                    </h5>
                                </div>
                            </li>
                            <li class="contact-info-list wow fadeInUp" data-wow-delay="500ms"
                                style="visibility: visible; animation-delay: 500ms; animation-name: fadeInUp;">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="info">
                                    <p>Phone</p>
                                    <h5>
                                        <a href="tel:+4733378901">+44-20-7328-4499</a>
                                        <br><a href="tel:+4733378901">+99-34-8878-9989</a>
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- contact -->
    <!-- script -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="assets/js/script.js"></script>
    <script>
        var options = {
            strings: ['Web Designer', 'Web Developer.', 'WordPress Developer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        };

        var typed = new Typed('#typed-text', options);
    </script>
</body>

</html>
