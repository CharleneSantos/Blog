create table if not exists users (
  id SERIAL primary key,
  name VARCHAR (255),
  email VARCHAR (255) unique,
  password VARCHAR(255)
)


INSERT INTO public.users(
	name, email, password)
	VALUES ();


create table if not exists postagens (
  id SERIAL primary key,
  titulo VARCHAR (255),
  descricao TEXT,
  conteudo TEXT,
  autor VARCHAR (255),
  imagem TEXT,
  tags VARCHAR(255)
)


INSERT INTO public.postagens(
	titulo, descricao, conteudo, autor, imagem, tags)
	VALUES (
		'Comitê Antirracista: para onde vamos a partir daqui?$',
		'“Muitas vezes, o que falamos é um espelho dos acontecimentos. Mas, às vezes, os acontecimentos são tão inesperados que não temos palavras para eles. Então, como fazer para colocarmos os fatos em palavras?',
		'Começamos nossos encontros em 2024 com dois integrantes do Comitê compartilhando a experiência imersiva que tiveram em Salvador - BA no ano anterior.A imersão fez parte da trilha formativa:  "Entre o Remendar e o Tecer: a costura de pensamentos e práticas para uma educação antirracista", do Centro de Formação da Vila. Fernando e Laura compartilharam as aprendizagens da experiência imersiva com os demais integrantes do Comitê, destacando as oficinas pedagógicas vivenciadas, as visitas realizadas em organizações formais e não formais de educação (públicas e privadas) que desenvolvem trabalhos de referência na promoção da educação para as relações étnico-raciais, e também as atividades culturais que promovem a ampliação de repertório sobre as contribuições do povo negro para a formação social, política, científica, econômica e cultural do Brasil que conheceram por lá.

Inspirados pela apresentação e pelos relatos de experiências sobre a imersão, o Comitê Antirracista convidou alguns profissionais da Escola Viva para participar das reuniões do Comitê, com formações que visavam à reflexão sobre a concretização de um currículo antirracista. 

Foram elas e ele: Gisele Milani, nossa assessora na área de Música, para conversar sobre o racismo e a educação antirracista na música. 

Sonia Tokitaka, nossa assessora em sustentabilidade, para refletir sobre o racismo ambiental. 
Carolina Mennocchi e Taís Mathias, da equipe de Bibliotecas Viva, para pensar sobre o racismo e a educação antirracista na literatura.

E Flávio Tito, professor de História na Viva, para compartilhar aspectos relevantes da História numa perspectiva não eurocentrada.

A cada encontro, um infinito de saberes compartilhados e o desejo crescente de ver na prática algumas transformações necessárias. 

Com as famílias do Comitê cada vez mais engajadas e parceiras, com a equipe inspirada e com o compromisso de ampliar aquilo que aprendeu, e com todos e todas determinados a potencializar a Educação Antirracista na Escola Viva, o que antes era discussão e teoria, se revelou em práticas de ensino-aprendizagem para toda a comunidade escolar.

Como exemplo, temos o lindo o projeto “Qual é a sua cara de espelho?”, dos professores Giulia Valadares e Rodrigo de Paiva Correa, desenvolvido com estudantes do 4° ano dos anos Iniciais do Ensino Fundamental e compartilhado com diversos educadores do Brasil no Painel de Práticas do Centro de Formação da Vila.

O TRONCO

"Ninguém fica de pé

se não tiver

o meio.

 

O meio depois do início.

O meio antes do fim.

O meio no meio do meio.

 

Ninguém fica firme

se o tronco

não segurar a cabeça e o pé.

 

Ninguém vai ao fim

nem ao começo do mundo

se não tiver meios.

 

O tronco no meio do corpo

faz o capoeira

bater pernas, palmas e pé."

 

(Edimilson de Almeida Pereira - Poemas para ler com palmas)

',
'Professor Fulano', 
'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxm0BvsDHGeyzJv2NiLfXB6c4-CWTX3njM5l0wY91-uAPuYoHxfZGl44wyCjEBjoExNxGN0Rm6aFqCwhZaFoBf4CxQ2l1N8YrmucP1dNMOfBbFYP6CMsU_YmrUV9Hcuju0WLoO?key=sOpTjn5H2bT67rB7h5kBvW2S',
'#racismo #ComiteAntirracista'

);