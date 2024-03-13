const template = {
  head: () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>Resume</title>
          <link rel="icon" type="image/x-icon" href="https://github.com/JeongMyeonghoon1105/Images/blob/main/Title_Logo.png?raw=true" />
          <!-- Font Awesome icons (free version)-->
          <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
          <!-- Google fonts-->
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
          <!-- Core theme CSS (includes Bootstrap)-->
          <link href="/css/styles.css" rel="stylesheet" />
        </head>
    `
  },
  body: (blog_content) => {
    return `
          <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Jeong Myeonghoon</span>
                <span class="d-none d-lg-block">
                  <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://avatars.githubusercontent.com/u/89135740?v=4" alt="..." />
                </span>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#learnings">Learnings</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#blog">Tech Blog</a></li>
                </ul>
              </div>
            </nav>

            <!-- Page Content-->
            <div class="container-fluid p-0">
              <!-- About-->
              <section class="resume-section" id="about">
                <div class="resume-section-content">
                  <h1 class="mb-0">
                    Jeong
                    <span class="text-primary">Myeonghoon</span>
                  </h1>
                  <div class="subheading mb-5">
                    <a href="mailto:name@email.com">wjdaudgns1105@gmail.com</a>
                  </div>
                  <p class="lead mb-5">성장하는 개발자 정명훈입니다</p>
                  <div class="social-icons">
                    <a class="social-icon" href="https://www.instagram.com/myeonghoon._.1105/"><i class="fab fa-instagram"></i></a>
                    <a class="social-icon" href="https://github.com/JeongMyeonghoon1105/"><i class="fab fa-github"></i></a>
                  </div>
                </div>
              </section>
              <hr class="m-0" />
              
              <!-- Education-->
              <section class="resume-section" id="education">
                <div class="resume-section-content">
                  <h2 class="mb-5">Education</h2>
                  <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                      <h3 class="mb-0">서울시립대학교</h3><br>
                      <div class="subheading mb-3">UNIVERSITY OF SEOUL</div>
                      <div>사회복지학 전공 - 컴퓨터과학 부전공</div>
                      <p>GPA: 3.37</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">March 2022 - Present</span></div>
                  </div>
                  <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                      <h3 class="mb-0">서원고등학교</h3><br>
                      <div class="subheading mb-3">SEOWON HIGHSCHOOL</div>
                      <p>제14회 졸업</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">March 2016 - February 2019</span></div>
                  </div>
                </div>
              </section>
              <hr class="m-0" />

              <!-- Academic Background -->
              <section class="resume-section" id="learnings">
                <div class="resume-section-content">
                  <h2 class="mb-5">Learnings</h2>
                  <h3 class="mb-5">Academic Background Regarding CS</h3>
                  <ul class="mb-0">
                    <li>
                      이산수학
                      <p>GPA: 4.00</p>
                      <!-- https://github.com/JeongMyeonghoon1105/Data-Structure-23F -->
                    </li>
                    <li>
                      논리회로및실습
                      <p>GPA: 2.50</p>
                    </li>
                    <li>
                      C프로그래밍및실습
                      <p>GPA: 4.50</p>
                    </li>
                    <li>
                      자료구조
                      <p>GPA: 3.50</p>
                    </li>
                  </ul>
                  <br><br>
                  <h3 class="mb-5">Language Ability</h3>
                  <p>TOEIC 905</p>
                </div>
              </section>
              <hr class="m-0" />
          
              <!-- Skills-->
              <section class="resume-section" id="skills">
                <div class="resume-section-content">
                  <h2 class="mb-5">Skills</h2>
                  <div class="subheading mb-3">Programming Languages & Tools</div>
                  <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                    <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                    <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                    <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    <li class="list-inline-item"><i class="fab fa-github"></i></li>
                    <li class="list-inline-item"><i class="fab fa-react"></i></li>
                    <li class="list-inline-item"><i class="fab fa-python"></i></li>
                    <li class="list-inline-item"><i class="fab fa-ubuntu"></i></li>
                  </ul>
                  <br>
                  <div class="subheading mb-3">Problem Solving Ability</div>
                  <img style="width: 40%" src="https://github.com/JeongMyeonghoon1105/Images/blob/main/solvedac.jpeg?raw=true" alt="">
                </div>
              </section>
              <hr class="m-0" />

              <!-- Experience-->
              <section class="resume-section" id="experience">
                <div class="resume-section-content">
                  <h2 class="mb-5">Experience</h2>
                  <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                      <h3 class="mb-0">강사</h3><br>
                      <div class="subheading mb-3">동탄 코딩랩학원</div>
                      <p>
                      코딩 학원에서 강사로 활동하며 파이썬, C, 웹, 데이터 분석 기초, 머신러닝 기초 등을 가르쳤습니다. 학생들과 함께 다양한 프로젝트를 진행하며 디지털미디어고 합격 등의 성과를 거두었으며, OpenCV와 CNN을 활용한 불량 검출 프로젝트 등을 진행하며 여러 직장인 수강생의 실무를 돕기도 했습니다. 또한 학원 웹사이트를 직접 제작하였으며, Ubuntu 서버에 호스팅하여 관리하는 업무도 맡았습니다.
                      </p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">March 2022 - Present</span></div>
                  </div>
                </div>
              </section>
              <hr class="m-0" />

              <!-- Blog -->
              <section class="resume-section" id="blog">
                <div class="resume-section-content">
                  <h2 class="mb-5">Tech Blog</h2>
                  ${blog_content}
                  <p class="mb-0"></p>
                </div>
              </section>
            </div>
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="js/scripts.js"></script>
          </body>
      </html>
    `
  },
  posting: (id, title, subheading, datetime) => {
    return `
      <br>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5 link-btn" onClick="location.href='/post?id=${id}'">
        <div class="flex-grow-1">
          <h4 class="mb-0">${title}</h4><br>
          <div>${subheading}</div>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">${datetime}</span></div>
      </div>
      <br>
    `
  },
  write: () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
          <title>Resume</title>
          <link rel="icon" type="image/x-icon" href="https://github.com/JeongMyeonghoon1105/Images/blob/main/Title_Logo.png?raw=true" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
          <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
          <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
          <!-- Google fonts-->
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
          <link href="/css/write.css" rel="stylesheet" />
        </head>
        <body>
          <div class="inner">
            <h1 style="font-weight: bold; font-family: Muli, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji !important;">WRITE</h1><br>
            <form method="post" action="/upload">
              <input type="text" name="title" placeholder="Title"><br><br>
              <input type="text" name="subheading" placeholder="Subheading"><br><br>
              <textarea id="summernote" name="editordata"></textarea>
              <input class="submit-btn" type="submit" id="submit" value="Submit">
            </form>
            <script>
              $(document).ready(function() {
                  $('#summernote').summernote()
              })
            </script>
          </div>
        </body>
      </html>
    `
  },
  post: (title, content) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>Resume</title>
          <link rel="icon" type="image/x-icon" href="https://github.com/JeongMyeonghoon1105/Images/blob/main/Title_Logo.png?raw=true" />
          <!-- Font Awesome icons (free version)-->
          <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
          <!-- Google fonts-->
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
          <!-- Core theme CSS (includes Bootstrap)-->
          <link href="/css/styles.css" rel="stylesheet" />
        </head>
        <body id="page-top">
          <!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <span class="d-block d-lg-none">Jeong Myeonghoon</span>
              <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://avatars.githubusercontent.com/u/89135740?v=4" alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#about">About</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#education">Education</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#learnings">Learnings</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#skills">Skills</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#experience">Experience</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#blog">Tech Blog</a></li>
              </ul>
            </div>
          </nav>
          <!-- Content -->
          <div class="container-fluid p-0">
            <section class="resume-section">
              <div class="resume-section-content">
                <h2 class="mb-5">${title}</h2>
                <div class="mb-3">${content}</div>
              </div>
            </section>
          </div>
        </body>
      </html>
    `
  },
  signin: () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>Resume</title>
          <link rel="icon" type="image/x-icon" href="https://github.com/JeongMyeonghoon1105/Images/blob/main/Title_Logo.png?raw=true" />
          <!-- Font Awesome icons (free version)-->
          <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
          <!-- Google fonts-->
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
          <!-- Core theme CSS (includes Bootstrap)-->
          <link href="/css/signin.css" rel="stylesheet" />
        </head>
        <body>
          <div class="content-box">
            <div class="inner-box">
              <h2>Sign In</h2>
              <form action="/auth/login_process" method="post">
              <p><input class="signin" type="text" name="username" placeholder="ID"></p>
              <p><input class="signin" type="password" name="pwd" placeholder="PW"></p>
              <p><input class="submit-btn" type="submit" value="Sign In"></p>
              </form>
            </div>
          </div>
        </body>
      </html>
    `
  }
}

module.exports = template
