// -------------------------------------
// vue app
// -------------------------------------
var submitted = false;
// Create a new instance of Notyf
const notyf = new Notyf();
const serviceId = "service_f04f5fn";
const templateId = "template_yyol1im";
const publicKey = "Kgh9eGQ7a-T32rD4y";

const sendEmail = (data) => {

  const templateParams = {
    from_name: data.name,
    to_name: 'Amit',
    subject: 'New Enquiry',
    email: data.email,
    phone: data.phone,
    message: data.message,
  };

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    notyf.success('Your enquiry has been sent successfully! I will connect you shortly.');
    document.getElementById('contactForm').reset();

  }, (error) => {
    console.error('FAILED...', error);
    notyf.error('Failed to send enquiry. Please try again later.');
  });
  return true;
}


const app = Vue.createApp({
  
  data() {

    return {
      
      // the date my career started (change to yours)
      careerStartDate: 2020,

      // the date copyright started (change to yours)
      copyrightStartDate: 2022,

      // for the template theme
      appTheme: 'light_theme',
      savedTheme: null,

      // flag to toggle the preloader
      isPreloading: true,

      // toast notifications array
      notifications: [],

      // manage loading spinner status
      ajaxLoading: [],

      // for minimizing the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // for toggling the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      // for scroll to top button
      startShowingScrollTopBtnAt: 600,
      isScrollTopBtnDisplayed: false,

      // flag to toggle focus style class
      isAnyFocus: false,

      // flag to toggle nav menu
      isNavMenuOpen: false,

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', ar: 'الرئيسية' }
        }, {
          url: '#about',
          title: { en: 'About', ar: 'من أنا' }
        }, {
          url: '#skills',
          title: { en: 'Skills', ar: 'مهاراتي' }
        }, {
          url: '#portfolio',
          title: { en: 'Portfolio', ar: 'أعمالي' }
        }, {
          url: '#contact',
          title: { en: 'Contact', ar: 'اتصل بي' }
        }
      ],

      // flag to toggle between skills and tools in skills section
      isSkillsOrTools: 'skills',

      // list of skills items to loop through it
      skillsItems: [
        {
          imgUrl: 'assets/images/skills/angular.png',
          title: 'Angular'
        }, {
          imgUrl: 'assets/images/skills/react.png',
          title: 'React'
        },
        {
          imgUrl: 'assets/images/skills/html5.png',
          title: 'HTML5'
        },
        {
          imgUrl: 'assets/images/skills/css3.png',
          title: 'CSS'
        },
        {
          imgUrl: 'assets/images/skills/sass.png',
          title: 'SASS'
        },
        {
          imgUrl: 'assets/images/skills/javascript.png',
          title: 'JavaScript'
        }, {
          imgUrl: 'assets/images/skills/typescript.png',
          title: 'TypeScript'
        }, {
          imgUrl: 'assets/images/skills/jquery.png',
          title: 'jQuery'
        },{
          imgUrl: 'assets/images/skills/nodejs.png',
          title: 'Node JS'
        },
        {
          imgUrl: 'assets/images/skills/bootstrap.png',
          title: 'Bootstrap'
        }, {
          imgUrl: 'assets/images/skills/mat-ui.png',
          title: 'Material UI'
        }, {
          imgUrl: 'assets/images/skills/firebase.png',
          title: 'Firebase'
        }, {
          imgUrl: 'assets/images/skills/wordpress.png',
          title: 'Wordpress'
        }, {
          imgUrl: 'assets/images/skills/mysql.png',
          title: 'MySQL'
        },
        {
          imgUrl: 'assets/images/skills/mongoDB.jfif',
          title: 'Mongo DB'
        }
      ],

      // list of tools items to loop through it
      toolsItems: [
        {
          imgUrl: 'assets/images/skills/ajax.png',
          title: 'Ajax'
        }, {
          imgUrl: 'assets/images/skills/aws.webp',
          title: 'AWS'
        }, {
          imgUrl: 'assets/images/skills/docker.png',
          title: 'Docker'
        }, {
          imgUrl: 'assets/images/skills/git.png',
          title: 'Git (Github)'
        }, {
          imgUrl: 'assets/images/skills/npm.png',
          title: 'NPM'
        }, {
          imgUrl: 'assets/images/skills/command.png',
          title: 'Command Line'
        }, {
          imgUrl: 'assets/images/skills/vs-code.png',
          title: 'VS Code'
        }, {
          imgUrl: 'assets/images/skills/postman.webp',
          title: 'Postman'
        }, {
          imgUrl: 'assets/images/skills/clickup.png',
          title: 'ClickUp'
        }, {
          imgUrl: 'assets/images/skills/slack.png',
          title: 'Slack'
        }, {
          imgUrl: 'assets/images/skills/figma.png',
          title: 'Figma'
        }, {
          imgUrl: 'assets/images/skills/adobe-xd.png',
          title: 'Adobe XD'
        }
      ],

      // list of experience items to loop through it
      experienceItems: [
       {
          date: '2020',
          companyName: { en: 'NexGen Innovators', ar: '' },
          jobTitle: { en: 'Junior Web Developer', ar: '' },
          desc: {
            en: 'My Primary goal was to manage eCommerce website & software based on CodeIgniter, Laravel & WordPress/WooCommerce Websites',
            ar: ''
          }
        }, {
          date: '2022',
          companyName: { en: 'Digiware IT Solutions', ar: '' },
          jobTitle: { en: 'Web Developer', ar: '' },
          desc: {
            en: 'My Primary goal was to develop and manage website & webApps for our clients based on Angular & Wordpress',
            ar: ''
          }
        }, {
          date: '2023',
          companyName: { en: 'Bulk Buy India', ar: '' },
          jobTitle: { en: 'Angular Developer', ar: '' },
          desc: {
            en: 'My primary role has been changed and I shifted to provide end to end complex solution on Angular based e-commerce website & web apps.',
            ar: ''
          }
        },
        {
          date: '2024',
          companyName: { en: 'Motherson Technology Services Limited', ar: '' },
          jobTitle: { en: 'Software Engineer', ar: '' },
          desc: {
            en: 'My primary role was to provide end to end complex solution on Angular based web apps & web tools to automate various process, like Payroll, Expense and approval management system.',
            ar: ''
          }
        }, {}, {}
      ],

      // filter type for items in portfolio section
      worksFilter: 'all',

      // list of portfolio items to loop through it
      allPortfolioItems: [
         {
          url: 'https://starsnew.mindeservices.com',
          imgUrl: 'assets/images/portfolio/portfolio-1.png',
          title: { en: 'STARS', ar: '' },
          desc: { en: 'June 2024', ar: '' },
          category: { slug: 'angular', name: 'Angular' }
        },
        {
          url: 'https://bulkbuyindia.com',
          imgUrl: 'assets/images/portfolio/portfolio-2.png',
          title: { en: 'Bulk Buy India', ar: '' },
          desc: { en: 'April 2023', ar: '' },
          category: { slug: 'angular', name: 'Angular' }
        },
       {
          url: 'https://restaurants.theplace.com.ng/userpanel/home',
          imgUrl: 'assets/images/portfolio/portfolio-3.png',
          title: { en: 'The Place', ar: '' },
          desc: { en: 'November 2022', ar: '' },
          category: { slug: 'angular', name: 'Angular' }
        },
        {
          url: 'https://justbook-app.com',
          imgUrl: 'assets/images/portfolio/portfolio-4.png',
          title: { en: 'Just Book', ar: '' },
          desc: { en: 'September 2022', ar: '' },
          category: { slug: 'angular', name: 'Angular' }
        },
        {
          url: 'https://digiwareitsolution.com',
          imgUrl: 'assets/images/portfolio/portfolio-5.png',
          title: { en: 'Digiware', ar: '' },
          desc: { en: 'February 2022', ar: '' },
          category: { slug: 'wordpress', name: 'Wordpress' }
        },
        {
          url: 'https://www.fitnesscravers.com/',
          imgUrl: 'assets/images/portfolio/portfolio-6.png',
          title: { en: 'Fitness Cravers', ar: '' },
          desc: { en: 'May 2021', ar: '' },
          category: { slug: 'wordpress', name: 'Wordpress' }
        },
        // {
        //   url: 'https://mekosha.com',
        //   imgUrl: 'assets/images/portfolio/portfolio-7.png',
        //   title: { en: 'Mekosha', ar: '' },
        //   desc: { en: 'February 2021', ar: '' },
        //   category: { slug: 'wordpress', name: 'Wordpress' }
        // },
        {
          url: 'https://www.kcsshop.in/',
          imgUrl: 'assets/images/portfolio/portfolio-8.png',
          title: { en: 'KCS Kashmir Shawl Emporium', ar: '' },
          desc: { en: 'November 2020', ar: '' },
          category: { slug: 'wordpress', name: 'Wordpress' }
        },
      ],

      // current page of portfolio items
      portfolioItemsPage: 0,

      // viewed portfolio items
      portfolioItems: [],

      // list of testimonials items to loop through it
      testimonialsItems: [
        {
          imgUrl: 'assets/images/testimonials/testimonials-1.jpg',
          quoteContent: {
            en: 'Amit took our outdated website and gave it new life! His creativity and coding skills brought our ideas to life with a fresh design.',
            ar: ''
          },
          quoteAuthor: { en: 'Abhishek Agarwal', ar: '' },
          jobTitle: { en: 'E-commerce Seller', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-2.jpg',
          quoteContent: {
            en: 'From start to finish, Amit was professional and responsive. He developed a website that perfectly reflects our brand and vision.',
            ar: ''
          },
          quoteAuthor: { en: 'Dharmendra Dhakad', ar: '' },
          jobTitle: { en: 'Founder: Duxido', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-3.jpg',
          quoteContent: {
            en: 'Amit is a highly skilled developer who understood our needs and created a functional, beautiful site that boosted our online presence.',
            ar: ''
          },
          quoteAuthor: { en: 'Arjun Singh', ar: '' },
          jobTitle: { en: 'Founder: STS GRoup', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-4.jpg',
          quoteContent: {
            en: 'Amit worked on a handful of projects for us and has always exceeded our expectations. He is dedicated, talented and a delight to work with. Highly recommended!',
            ar: ''
          },
          quoteAuthor: { en: 'Alwin John', ar: '' },
          jobTitle: { en: 'Founder: GNext', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-5.jpg',
          quoteContent: {
            en: 'Amit is an exceptional web developer. He understood our requirements quickly and delivered a stunning website within our budget.',
            ar: ''
          },
          quoteAuthor: { en: 'Vijay K Sahu', ar: '' },
          jobTitle: { en: 'Founder: Shayama Industries', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-6.jpg',
          quoteContent: {
            en: 'Amit`s web development skills transformed our site. The process was smooth, and the result exceeded our expectations. Highly recommended!',
            ar: ''
          },
          quoteAuthor: { en: 'Rohit Kasera', ar: '' },
          jobTitle: { en: 'E-commerce Seller', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-7.jpg',
          quoteContent: {
            en: 'Amit was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: ''
          },
          quoteAuthor: { en: 'Ganesh Sudagar', ar: '' },
          jobTitle: { en: 'UI/UX Designer', ar: '' }
        },
        {
          imgUrl: 'assets/images/testimonials/testimonials-8.jpg',
          quoteContent: {
            en: 'Incredible attention to details and quick turnaround! Amit delivered a sleek, responsive website that works perfectly across all devices.',
            ar: ''
          },
          quoteAuthor: { en: 'Rohit Sharma', ar: '' },
          jobTitle: { en: 'E-commerce Seller', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-9.jpg',
          quoteContent: {
            en: 'Amit was fantastic to work with! He created a professional, high-performing website that meets all our business needs perfectly.',
            ar: ''
          },
          quoteAuthor: { en: 'Anup Kumar', ar: '' },
          jobTitle: { en: 'Co-Founder: Digital Agency', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-10.jpeg',
          quoteContent: {
            en: 'Amit`s attention to detail in translating my designs into code was impressive. His ability to maintain the integrity of the UI/UX while ensuring smooth functionality made the collaboration easy and successful.',
            ar: ''
          },
          quoteAuthor: { en: 'Tushar Saini', ar: '' },
          jobTitle: { en: 'UI/UX Designer', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-11.jpg',
          quoteContent: {
            en: 'Our website was delivered on time and beyond our expectations. Amit`s ability to balance creativity with functionality is remarkable.',
            ar: ''
          },
          quoteAuthor: { en: 'Anubhav Agarwal', ar: '' },
          jobTitle: { en: 'E-Commerce Seller', ar: '' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-12.jpg',
          quoteContent: {
            en: 'Amit`s technical expertise and design skills are outstanding. Our new website is fast, modern, and has received great feedback from customers.',
            ar: ''
          },
          quoteAuthor: { en: 'Amol', ar: '' },
          jobTitle: { en: 'UI/UX Designer', ar: '' }
        }
      ]
    }
  },
  created() {
    // get a theme to use
    this.getAppTheme();

    // get portfolio items
    this.getPortfolioItems();
  },
  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor();

      // nav menu tab trap
      this.navMenuTabTrap();

      // apply pan effect hero image
      this.heroImgPanEffect();

      // initialize VanillaTilt library in portfolio section
      this.initializeTilt();
    }

    // hide the preloader screen after loading
    window.addEventListener('load', () => this.isPreloading = false);

    // scrolling options
    this.scrollingOptions();
    document.addEventListener('scroll', () => this.scrollingOptions());

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
      Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
      });
    });
  },
  methods: {  
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner;

      app.addEventListener('mousemove', e => {
        // make the circles follow the cursor
        outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
        inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

        // add link hover style
        (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
      });

      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect');
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('nafieSavedTheme');
    
      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
    
      } else {
        // So, try to get the browser default theme or make your own default
    
        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
    
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
          } else { this.savedTheme = 'light_theme'; }
    
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = appTheme;
        }
      }
    
      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';

      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = true;

      bodyEl.setAttribute('style', 'overflow-y: hidden;');

      // set focus on nav menu
      this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = false;

      bodyEl.removeAttribute('style');

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;

      document.addEventListener('keyup', e => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
            .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];

          if (e.code === 'Tab') {
            if (e.shiftKey) /* shift + tab */ {
              // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } else /* tab */ {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') { this.toggleNavMenu(); }

          // get current active element
          const activeEl = document.activeElement;

          // check if last item or not
          isLastTabStop = (activeEl === lastTabStop) ? true : false;

          // check if first item or not
          isFirstTabStop = (activeEl === firstTabStop) ? true : false;
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection;
      const layer1 = parent.querySelectorAll('.layer')[0];
      const layer2 = parent.querySelectorAll('.layer')[1];

      parent.addEventListener('mousemove', (e) => {
        const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
        const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

        parent.classList.add('parallax-animation');

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset;
    
      // check for current scroll position to minimize the header
      this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;
    
      // check for current scroll position to toggle the header
      this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
      this.lastScrollPosition = scrollPosition;
    
      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },

    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      VanillaTilt.init(this.$refs.portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    },

    // get portfolio items
    getPortfolioItems() {
      const size = 7;

      // check if there is more works or not
      if ((this.portfolioItemsPage - 1) * size + size < this.allPortfolioItems.length) {
        this.portfolioItemsPage++;
        const itemsArr = this.allPortfolioItems.slice((this.portfolioItemsPage - 1) * size, this.portfolioItemsPage * size);
  
        this.portfolioItems.push(...itemsArr);
  
        // initialize VanillaTilt for new items
        setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

      } else {

        // show the message "No more works" to the user
        this.setNotify({
          className: 'danger',
          msg: this.$refs.portfolioItems.getAttribute('data-no-more-works-msg'),
          time: 3000
        });
      }
    },

    // contact form validation
    contactFormValidation() {

      // contact form
      const contactForm = this.$refs.contactForm;

      // form controls
      const name        = contactForm.querySelector('input[name="name"]');
      const email       = contactForm.querySelector('input[name="email"]');
      const phone       = contactForm.querySelector('input[name="phone"]');
      const message     = contactForm.querySelector('textarea');

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true }
      };

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === '') {
        errors.name.required = true;
        this.setNotify({
          id: 'nameRequired',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.name.required = false;
        this.dismissNotify('nameRequired');
      }

      // minlength validation
      if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
        errors.name.minLength = true;
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
        });

      } else {
        errors.name.minLength = false;
        this.dismissNotify('nameMinLength');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
        name.classList.remove('valid');
        name.classList.add('invalid');
      } else {
        name.classList.remove('invalid');
        name.classList.add('valid');
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === '') {
        errors.email.required = true;
        this.setNotify({
          id: 'emailRequired',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.email.required = false;
        this.dismissNotify('emailRequired');
      }

      // email validation
      if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        errors.email.invalid = true;
        this.setNotify({
          id: 'emailInvalid',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.email.invalid = false;
        this.dismissNotify('emailInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
      } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
        errors.phone.invalid = true;
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.phone.invalid = false;
        this.dismissNotify('phoneInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
      } else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === '') {
        errors.message.required = true;
        this.setNotify({
          id: 'messageRequired',
          className: 'danger',
          msg: message.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.message.required = false;
        this.dismissNotify('messageRequired');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
        message.classList.remove('valid');
        message.classList.add('invalid');
      } else {
        message.classList.remove('invalid');
        message.classList.add('valid');
      }
      var dataArray = $("form.contact-form").serializeArray(),
      dataObj = {};
      $(dataArray).each(function(index, field){
        dataObj[field.name] = field.value;
      });
      sendEmail(dataObj);
      return;
      // send the message if the form is valid
      (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute('action');
      const formData = new FormData(form);

      // start loading spinner
      this.startLoading();

      // send post request
      fetch(url, { method: 'POST', body: formData })
        .then(res => res.text())
        .then(data => {
          if (data === 'success') {
            // show success message
            this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });

            // reset all form inputs
            form.reset();

            // remove inputs valid classes
            form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

          } else if (data === 'error') {
            // show error message
            this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
          }

          // end loading spinner
          this.endLoading();

        })
        .catch(err => console.log(err));
    },

    // show messages by toast notifications
    setNotify({id, className, msg, time}) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time
      };

      if (id) {
        (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

      } else { this.notifications.push(notify); }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time);
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex(notify => notify.id === id);
      (index > -1) && this.notifications.splice(index, 1);
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true);
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop();
    }
  },
  computed: {
    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some(state => state === true);
    },

    // get the total years of experience
    experienceYears() {
      return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
    },

    // split experience items into chunks of 3 items
    experienceChunks() {
      return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
      return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
    }
  },
  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
      }
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        [...el.children].forEach((child, i) => {
          child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
        });
      }
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add('has-tooltip');
        el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
      }
    }
  }

  
});
app.mount('#app');

function playPopupVideo(video_embed_url) {
  let popup_html = '<div class="popup-overlay">\n' +
      '        <img src="https://nexgi-static.nexgi.com/uploads/2021/05/cancel.svg" alt="cancel video popup" class="cancel-video-popup cp" onclick="closePopupPlyr(this)">\n' +
      '        <div class="plyr__video-embed" id="player_container">\n' +
      '            <iframe\n' +
      '                    width="560" height="315"\n' +
      '                    src="' + video_embed_url + '?autoplay=1&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"\n' +
      '                    allowfullscreen\n' +
      '                    allowtransparency\n' +
      '                    allow="autoplay"\n' +
      '            ></iframe>\n' +
      '        </div>\n' +
      '    </div>';

  $("body").find(".popup-overlay").remove();
  $("body").append(popup_html);
  const player = new Plyr('#player_container', {
      title: 'Intro Video',
      autoplay: true
  });
}

function closePopupPlyr(that) {
  $(that).parent('.popup-overlay').remove();
}


