
const portafolio = new function(){    

    const performBurgerEvent = function(type){
        const burger_menu = document.querySelector('.burger-button');
        const menu = document.querySelector('nav');

        let hideshow = function(){
            menu.classList.toggle('is-active');
        }
        if(type === 'add')
            burger_menu.addEventListener('click',hideshow);
        else
            burger_menu.removeEventListener('click',hideshow); 
    }

    const diplomas = [
        {title:'Curso de desarrollo web online (2016)',date:'3 de Mayo 2018',company:'Platzi'},
        {title:'Curso de bases técnicas de android',date:'4 de Junio de 2018',company:'Platzi'},
        {title:'Introducción al diseño de prototipos',date:'5 de Julio 2018',company:'Platzi'},
        {title:'Curso de CSS Grid Layout',date:'3 de Septiembre 2018',company:'Platzi'},
        {title:'Curso de desarrollo web online (2018)',date:'24 de Septiembre 2018',company:'Platzi'},
        {title:'Fundamentos de javascript',date:'4 de Octubre 2018',company:'Platzi'},
        {title:'Curso de responsive design (2018)',date:'17 de Octubre 2018',company:'Platzi'},
        {title:'Curso de jQuery a JavaScript',date:'19 de Octubre 2018',company:'Platzi'},
        {title:'Curso de SASS',date:'31 de Octubre 2018',company:'Platzi'},
        {title:'Curso de Adobe XD',date:'8 de Noviembre 2018',company:'Platzi'}
    ];

    const renderDiplomas = function(){

        let diplomaTemplate = ({title,date,company}) => {
            return `<div class="diploma">
                        <div class="diploma-title-container">
                            <div class="diploma-title">
                                ${title}
                            </div>
                        </div>
                        <div class="diploma-date-container">
                            <div class="diploma-date">
                                ${date}
                            </div>     
                        </div>
                        <div class="diploma-company">
                            <button>
                                ${company}
                            </button>
                        </div>
                    </div>`;
        };

        const $diplomasContainer = document.querySelector('.diplomas-container');

        const createHtml = (template) => {
            const html = document.implementation.createHTMLDocument();
            html.body.innerHTML = template
            return html.body.children[0];
        };

        diplomas.forEach((item)=>{
           let template = diplomaTemplate(item);           
           let diplomaHTML = createHtml(template);
           $diplomasContainer.append(diplomaHTML);
        });

    }

    this.init = function(){

        renderDiplomas();

        const tablet = window.matchMedia('screen and (max-width:768px)')
        
        const validation = function(event){
            console.log(event);
            if(event.matches){
                performBurgerEvent('add');
            }
            else{
                performBurgerEvent('remove');
            }
        }
        
        tablet.addListener(validation);

        validation(tablet);
    }

}

portafolio.init();