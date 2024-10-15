//essa função retorna a data e o tempo atual em forma de string 
//ex: a data atual é "15/10/2024, 02:21:51", a função ira retornar "15102024022151"
export function currentDateTime() {
   const now = new Date();

   // Extrair os componentes da data e horário
   const year = String(now.getFullYear());
   const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
   const day = String(now.getDate()).padStart(2, '0');
   

   const hours = String(now.getHours()).padStart(2, '0');
   const minutes = String(now.getMinutes()).padStart(2, '0');
   const seconds = String(now.getSeconds()).padStart(2, '0');

   // Concatenar todos os componentes
   const formatted = `${year}${month}${day}${hours}${minutes}${seconds}`;

   return formatted
}