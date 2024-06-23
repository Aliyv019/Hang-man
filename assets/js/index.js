const welcome=document.querySelector('.welcome_page')
const start=welcome.querySelector('button')
const game_page=document.querySelector('.game_page')
const bgmusic=document.querySelector('#bgmusic')
const game_over=document.querySelector('#gameover')
const score_txt=document.querySelectorAll('.score')[0]
const score_over=document.querySelectorAll('.score')[1]
const man=document.querySelector('img')
const gameover=document.querySelector('.game_over')
const again=gameover.querySelector('button')
const word=document.querySelector('ul')

const cities = [
    'Aghdam',
    'Agdash',
    'Aghjabadi',
    'Agstafa',
    'Agsu',
    'Astara',
    'Aghdara',
    'Babek',
    'Baku',
    'Balaken',
    'Barda',
    'Beylagan',
    'Bilasuvar',
    'Dashkasan',
    'Shabran',
    'Fuzuli',
    'Gadabay',
    'Ganja',
    'Goranboy',
    'Goychay',
    'Goygol',
    'Hajigabul',
    'Imishli',
    'Ismayilli',
    'Jabrayil',
    'Julfa',
    'Kalbajar',
    'Khachmaz',
    'Khankendi',
    'Khojavend',
    'Khirdalan',
    'Kurdamir',
    'Lankaran',
    'Lerik',
    'Masally',
    'Mingachevir',
    'Nakhchivan',
    'Naftalan',
    'Neftchala',
    'Oghuz',
    'Ordubad',
    'Qabala',
    'Qakh',
    'Qazakh',
    'Quba',
    'Qubadli',
    'Qusar',
    'Saatli',
    'Sabirabad',
    'Shahbuz',
    'Shaki',
    'Shamakhi',
    'Shamkir',
    'Sharur',
    'Shirvan',
    'Siyazan',
    'Shusha',
    'Sumgait',
    'Tartar',
    'Tovuz',
    'Ujar',
    'Yardimli',
    'Yevlakh',
    'Zaqatala',
    'Zardab',
    'Zangilan'
]

function randomcity(){
    return cities[Math.floor(Math.random()*cities.length)]
}

start.addEventListener('click',()=>{
    welcome.style.display='none';
    game_page.style.display='flex';
    bgmusic.play()
    game()
    
})
again.addEventListener('click',()=>window.location.reload())

function game(){
    let city=randomcity()
    let live=1
    word.innerHTML=city.split('').map(()=>`<li class="letter"></li>`).join('')
    console.log(city);
    let score=0
    window.addEventListener('keypress',(event)=>{
        let f=0
        for(let i=0;i<city.length;i++){
            if(!word.querySelectorAll('li')[i].innerText==""){
                f++
            }
        }
        if(f!=city.length){
            if(!city.toLowerCase().includes(event.key)){
                if(live<7){
                    live++
                    man.src=`./assets/images/hang-man${live}.png`
                }
                else{
                    bgmusic.pause()
                    game_page.style.display='none'
                    gameover.style.display='flex'
                    score_over.textContent=score
                    game_over.play()
                }
                }
                else{
                    [...city].forEach((letter,index)=>{
                        if(letter.toLowerCase()==event.key){
                            word.querySelectorAll('li')[index].innerText=letter
                            word.querySelectorAll('li')[index].classList.add('guessed')
                            // word.querySelectorAll('li')[index].style.borderColor="black"
                            // word.querySelectorAll('li')[index].style.background='none'
                            // word.querySelectorAll('li')[index].style.color='white'
                            // word.querySelectorAll('li')[index].style.fontsize='30px'
                            // word.querySelectorAll('li')[index].style.fontFamily='Patrick Hand'
                        }
                    })
                }

        }
        else{
            score++
            city=randomcity()
            word.innerHTML=city.split('').map(()=>`<li class="letter"></li>`).join('')
            console.log(city);
            score_txt.textContent=score
        }

        
    })
}
