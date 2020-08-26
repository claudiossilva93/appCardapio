const m_moeda = v => {
  v = v.toString();
  v = v.replace(/\D/g, ""); //permite digitar apenas nÃºmeros
  v = v.replace(/(\d{1})(\d{8})$/, "$1.$2"); //coloca ponto antes dos Ãºltimos 8 digitos
  v = v.replace(/(\d{1})(\d{5})$/, "$1.$2"); //coloca ponto antes dos Ãºltimos 5 digitos
  v = v.replace(/(\d{1})(\d{1,2})$/, "$1,$2"); //coloca virgula antes dos Ãºltimos 2 digitos
  return v;
};

export default m_moeda;
