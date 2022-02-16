//PASSO 1 CRIAR AS VARIÁVEIS
var trex, trex_correndo;
var solo, soloimagem ,soloinvisivel;
var pontos = 0


function preload() {
    //carregar a imagem do solo
    soloimagem = loadImage("solo.png");
    trex_correndo = loadAnimation("trex1.png","trex2.png","trex3.png")
    
    //carregar a animação do t-rex

}

function setup() {
    createCanvas(600, 200);
    //criar a sprite solo;
    solo = createSprite(300, 190, 600, 20);
    soloinvisivel = createSprite(300, 195, 600, 10);
    //adicionar a imagem na sprite solo
    soloinvisivel.visible = false;
    solo.addImage(soloimagem);
    //dar velocidade ao solo
     solo.velocityX = -3;

    

    //criar a sprite trex;
   trex = createSprite( 40, 160 ,50 ,50) 
    //adicionar a animação na sprite do t-rex
    trex.addAnimation("correndo",trex_correndo)
    //definir o tamanho da animação
     trex.scale = 0.5

}

function draw() {
    background("white");



    //reiniciar a posição do solo automaticamente
    if (solo.x < 0){
    solo.x = solo.width / 2


    }
    //fazer o trex pular se apertar espaço
 
   
    if (keyDown("space") && trex.y > 140 ){
       trex.velocityY = -10
    
}
    
       //dar gravidade ao trex
       trex.velocityY += 0.5



    //impedir o trex de cair no abismo


    trex.collide(soloinvisivel);

    drawSprites();
    fill("red")
    
    
    text("pontos " + pontos, 100, 40);
}