const cursos = [

    {
        titulo: "Introdução à Análise de Dados - Microsoft Power BI",
        instituicao: "Fundação Bradesco",
        categoria: "Tecnologia",
        descricao: "Curso para conhecer os primeiros conceitos de análise de dados utilizando o Power BI.",
        modalidade: "EAD",
        link: "https://www.ev.org.br/cursos/introducao-a-analise-de-dados-microsoft-power-bi"
    },

    {
        titulo: "Administrando Banco de Dados",
        instituicao: "Fundação Bradesco",
        categoria: "Tecnologia",
        descricao: "Aprenda conceitos básicos sobre bancos de dados e organização de informações.",
        modalidade: "EAD",
        link: "https://www.ev.org.br/cursos/administrando-banco-de-dados"
    },

    {
        titulo: "Análise de Dados no Power BI",
        instituicao: "Fundação Bradesco",
        categoria: "Tecnologia",
        descricao: "Curso sobre análise de dados e criação de relatórios utilizando o Power BI.",
        modalidade: "EAD",
        link: "https://www.ev.org.br/cursos/analise-de-dados-no-power-bi"
    },

    {
        titulo: "Crie um site simples usando HTML, CSS e JavaScript",
        instituicao: "Fundação Bradesco",
        categoria: "Tecnologia",
        descricao: "Aprenda conceitos básicos para criar um site utilizando HTML, CSS e JavaScript.",
        modalidade: "EAD",
        link: "https://www.ev.org.br/cursos/crie-um-site-simples-usando-html-css-e-javascript"
    },

    {
        titulo: "Linguagem de Programação Python - Básico",
        instituicao: "Fundação Bradesco",
        categoria: "Tecnologia",
        descricao: "Curso introdutório para aprender os primeiros conceitos da linguagem Python.",
        modalidade: "EAD",
        link: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico"
    },

    {
        titulo: "Fundamentos de TI: Hardware e Software",
        instituicao: "Fundação Bradesco",
        categoria: "Tecnologia",
        descricao: "Conheça os conceitos básicos de hardware e software.",
        modalidade: "EAD",
        link: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software"
    },

    {
        titulo: "Excel básico 2013/2016",
        instituicao: "Udemy",
        categoria: "Tecnologia",
        descricao: "Curso básico para aprender a utilizar o Excel e suas principais funções.",
        modalidade: "EAD",
        link: "https://www.udemy.com/course/excel-basico-20132016/"
    },

    {
        titulo: "Microsoft PowerPoint para quem não sabe nada de PowerPoint",
        instituicao: "Udemy",
        categoria: "Tecnologia",
        descricao: "Aprenda a criar apresentações utilizando o Microsoft PowerPoint.",
        modalidade: "EAD",
        link: "https://www.udemy.com/course/powerpoint-para-quem-nao-sabe-nada-de-powerpoint/"
    },

    {
        titulo: "Discovery - Mini curso de inglês gratuito",
        instituicao: "Udemy",
        categoria: "Idiomas",
        descricao: "Curso introdutório de inglês com palavras e expressões do cotidiano.",
        modalidade: "EAD",
        link: "https://www.udemy.com/course/mini-curso-de-ingles-gratuito/"
    },

    {
        titulo: "Empreendedorismo",
        instituicao: "Udemy",
        categoria: "Administração",
        descricao: "Aprenda conceitos básicos de empreendedorismo e planejamento de negócios.",
        modalidade: "EAD",
        link: "https://www.udemy.com/course/curso-de-empreendedorismo/"
    },

    {
        titulo: "Investimento em Renda Fixa - Iniciante",
        instituicao: "Udemy",
        categoria: "Finanças",
        descricao: "Introdução aos investimentos de renda fixa para quem está começando.",
        modalidade: "EAD",
        link: "https://www.udemy.com/course/tesouro-direto-intermediario-e-avancado/"
    },

    {
        titulo: "Matemática Básica",
        instituicao: "Udemy",
        categoria: "Educação",
        descricao: "Revisão de conceitos básicos de matemática.",
        modalidade: "EAD",
        link: "https://www.udemy.com/course/matematica-basica-denis-wiener/"
    },

    {
        titulo: "Manutenção preventiva de veículos",
        instituicao: "SEST SENAT",
        categoria: "Automotivo",
        descricao: "Conheça alguns cuidados básicos para realizar a manutenção preventiva de veículos.",
        modalidade: "EAD",
        link: "https://digital.sestsenat.org.br/cursos/manutencao-preventiva-de-veiculos"
    },

    {
        titulo: "Mecânica descomplicada",
        instituicao: "SEST SENAT",
        categoria: "Automotivo",
        descricao: "Aprenda noções básicas de mecânica automotiva.",
        modalidade: "EAD",
        link: "https://digital.sestsenat.org.br/cursos/mecanica-descomplicada"
    }

];


let categoriaSelecionada = "Todos";


function mostrarCursos() {

    let texto = document.getElementById("campoBusca").value.toLowerCase();

    let lista = cursos;

    if (categoriaSelecionada != "Todos") {

        lista = lista.filter(function(curso) {

            return curso.categoria == categoriaSelecionada;

        });

    }

    if (texto != "") {

        lista = lista.filter(function(curso) {

            return curso.titulo.toLowerCase().includes(texto) ||
                   curso.instituicao.toLowerCase().includes(texto) ||
                   curso.categoria.toLowerCase().includes(texto);

        });

    }


    let areaCursos = document.getElementById("listaCursos");

    areaCursos.innerHTML = "";


    lista.forEach(function(curso) {

        areaCursos.innerHTML += `

            <div class="curso">

                <h3>${curso.titulo}</h3>

                <p>
                    <strong>Instituição:</strong>
                    ${curso.instituicao}
                </p>

                <p class="categoria">
                    Categoria: ${curso.categoria}
                </p>

                <p>
                    ${curso.descricao}
                </p>

                <p>
                    <strong>Modalidade:</strong>
                    ${curso.modalidade}
                </p>

                <a href="${curso.link}" target="_blank">
                    Ver curso
                </a>

            </div>

        `;

    });


    document.getElementById("quantidade").innerHTML =
        "Cursos encontrados: " + lista.length;


    if (lista.length == 0) {

        document.getElementById("nenhumCurso").style.display = "block";

    } else {

        document.getElementById("nenhumCurso").style.display = "none";

    }

}


function filtrarCategoria(categoria) {

    categoriaSelecionada = categoria;

    mostrarCursos();

}


document.getElementById("campoBusca").addEventListener(
    "keyup",
    mostrarCursos
);


mostrarCursos();
