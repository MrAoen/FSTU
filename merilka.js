// замена запятой на точку
function ShowRuleUA($id)
{ 
  document.location.href = "/appshipticket?CT_ID="+$id; 
}
function RegionCodes() 
{ 
  replaceAllComma(); 
  if (document.getElementById('CT_ID').value == '1') // Украина 
  { 
    document.getElementById('RegionCodes_ID').disabled = false; 
    document.getElementById('RegionCodes_ID').style.display = "inline"; 
    document.getElementById("reg_number").style.display = "inline"; 
    document.getElementById("reg_number").style.color = "red"; 
  } 
  else 
  {
    document.getElementById('RegionCodes_ID').disabled = true; 
    document.getElementById('RegionCodes_ID').style.display = "none"; 
    document.getElementById("reg_number").style.display = "none"; 
  }
}
function replaceAllComma()
{
 var rows=document.getElementsByTagName("input");
 for ( var x = 0; x < rows.length; x++ )
 {
  rows[x].value = rows[x].value.toString().replace(',','.');
 }
}
// дробные значения
function CheckDecimal(val,pr) 
{
  val.value = val.value.replace(/[^0-9\-\.]/g,'');
  if (val.value.split('.').length>pr) 
    val.value =val.value.replace(/\.+$/,"");
}
// проверка на макс и мин число
function CheckNum(ch,cnt1,cnt2)
{
  if ((parseFloat(ch.value) < cnt1) || (parseFloat(ch.value) > cnt2))
  {
    alert ("введите значение от "+cnt1+" до "+cnt2);
    ch.value= '';
  }
}
// проверка на макс и мин число
function CheckNumber(ch,cnt)
{
  if ((parseFloat(ch.value) < 0) || (parseFloat(ch.value) > cnt))
  {
    alert ("введите число от 0 до "+cnt);
    ch.value= '';
  }
}
// Прошу выдать мне регистрационный номер и судовой билет туристского судна ФСТУ
function Check_Box()
{
  if (document.getElementById('Flag_CertificateFSTU').checked == true )
    document.getElementById('button_send').disabled = false;
  else
    document.getElementById('button_send').disabled = true; 
}
// обновление полей в мерилке
function update_merilka()
{
  replaceAllComma();
  if (  isNaN(parseFloat(document.getElementById('MR_GrevNumber').value))  ||
        isNaN(parseFloat(document.getElementById('MR_CrewWeight').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Weight').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Length').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Machta_PPD').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Machta_PRD').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Liktros').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_P').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_B').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_E').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_HP').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_HB').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_HE').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Grot_VLM').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_P').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_B').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_E').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_HP').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_HB').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_HE').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Staksel_VLM').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_P').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_B').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_E').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_HP').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_HB').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_HE').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Kliver_VLM').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Spinaker_P').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Spinaker_B').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Spinaker_E').value))  ||
        isNaN(parseFloat(document.getElementById('MR_Spinaker_SMW').value))  
  )
    alert ("все поля должны быть заполнены");
  else
  {
    document.getElementById('MR_Area_Grot').disabled = false;
    document.getElementById('MR_Area_Staksel').disabled = false;
    document.getElementById('MR_Area_Kliver').disabled = false;
    document.getElementById('MR_Area_Spinaker').disabled = false;
    document.getElementById('MR_Spinaker_SMW_E').disabled = false;
    document.getElementById('MR_Main_Sail').disabled = false;
    document.getElementById('MR_Spinaker_MainSail').disabled = false;
    document.getElementById('MR_GB').disabled = false;
    document.getElementById('MR_GB_Spinaker').disabled = false;
    document.getElementById('MR_GB_CrewWeight').disabled = false;
    document.getElementById('MR_GB_CrewWeight_Spinaker').disabled = false;
    // window.location = "http://marins.org.ua/update_merilka.php";
    document.getElementById('sub').submit();
  }
}
//------ проверка числа ------------------
function check1(ch)
{
  if ((parseFloat(ch.value) < -2) || (parseFloat(ch.value) > 2))
  {
    alert ("введите значение от -2 до +2");
    ch.value= '';
  }
}
function CheckGrevNumber(ch)
{
  if ((parseFloat(ch.value) < 1) || (parseFloat(ch.value) > 15))
  {
    alert ("введите кол-во от 1 до 15");
    ch.value= '';
  }
}
function CheckWeight(ch)
{
  if ((parseInt(ch.value) < 40) || (parseInt(ch.value) > 1000))
  {
    alert ("введите вес в диапазоне от 40 до 1000 кг");
    ch.value= '';
  }
}
function CheckLength(ch)
{
  if ((parseFloat(ch.value) < 3) || (parseFloat(ch.value) > 15))
  {
    alert ("введите длину от 3 до 15 метров");
    ch.value= '';
  }
}
// расчёт ГБ
function calc_gb()
{
  replaceAllComma();
  var BR = 0; // удлинение шверта
  var BC = 0; // корректировка на шверт, %
  var CMP = 0; // за углепластиковую мачту = 1(%)
  // экипаж
  MR_GrevNumber = parseFloat(document.getElementById('MR_GrevNumber').value.toString().replace(',','.'));
  MR_CrewWeight = parseFloat(document.getElementById('MR_CrewWeight').value.toString().replace(',','.'));
  // катамаран
  MR_Weight = parseFloat(document.getElementById('MR_Weight').value.toString().replace(',','.'));
  MR_Length = parseFloat(document.getElementById('MR_Length').value.toString().replace(',','.'));
  // мачта
  MR_Machta_PPD = parseFloat(document.getElementById('MR_Machta_PPD').value.toString().replace(',','.'));
  MR_Machta_PRD = parseFloat(document.getElementById('MR_Machta_PRD').value.toString().replace(',','.'));
  MR_Liktros    = parseFloat(document.getElementById('MR_Liktros').value.toString().replace(',','.'));
  // грот
  MR_Grot_P   = parseFloat(document.getElementById('MR_Grot_P').value.toString().replace(',','.'));
  MR_Grot_B   = parseFloat(document.getElementById('MR_Grot_B').value.toString().replace(',','.'));
  MR_Grot_E   = parseFloat(document.getElementById('MR_Grot_E').value.toString().replace(',','.'));
  MR_Grot_HP  = parseFloat(document.getElementById('MR_Grot_HP').value.toString().replace(',','.'));
  MR_Grot_HB  = parseFloat(document.getElementById('MR_Grot_HB').value.toString().replace(',','.'));
  MR_Grot_HE  = parseFloat(document.getElementById('MR_Grot_HE').value.toString().replace(',','.'));
  MR_Grot_VLM = parseFloat(document.getElementById('MR_Grot_VLM').value.toString().replace(',','.')); // */
  // получение площади грота и профилья мачты
  if ((MR_Grot_P > 0) && (MR_Grot_B > 0) && (MR_Grot_E > 0) && (MR_Grot_VLM > 0))
  {
    if (parseFloat(MR_Machta_PRD-MR_Machta_PPD+MR_Liktros) < 0) 
    {
      alert ("введіть правильний профіль щогли, (D1-D+d) = має бути більше 0 ");
      document.getElementById('MR_Machta_PPD').value = '';
      document.getElementById('MR_Machta_PRD').value = '';
      document.getElementById('MR_Liktros').value = '';
      document.getElementById('MR_Area_Grot').value = '';
      document.getElementById('MR_Main_Sail').value = '';
      document.getElementById('MR_GB_Spinaker').value = '';
      document.getElementById('MR_GB').value = '';
      document.getElementById('MR_GB_CrewWeight_Spinaker').value = '';
      document.getElementById('MR_GB_CrewWeight').value = '';
    }
    else
    {
      MR_Area_Grot = (MR_Grot_P+MR_Grot_B+MR_Grot_E)/2;
      if (MR_Machta_PRD == MR_Machta_PPD)
        Machta = (MR_Machta_PRD-MR_Machta_PPD+MR_Liktros)
      else
        Machta = (MR_Machta_PRD-MR_Machta_PPD-MR_Liktros)
      MR_Area_Grot = (Math.sqrt(MR_Area_Grot*(MR_Area_Grot-MR_Grot_P)*(MR_Area_Grot-MR_Grot_B)*(MR_Area_Grot-MR_Grot_E))+2/3*MR_Grot_P*MR_Grot_HP+2/3*MR_Grot_B*MR_Grot_HB+2/3*MR_Grot_E*MR_Grot_HE+MR_Grot_P*(Machta));
      if (isNaN(MR_Area_Grot)) MR_Area_Grot = 0;
    }
  }
  else
  if ((MR_Grot_P > 0) && (MR_Grot_B > 0) && (MR_Grot_E > 0) && (MR_Grot_VLM <= 0)) 
  {
    MR_Area_Grot = 0;
    alert ("вкажіть значення VLM згідно розмірної схемою");
  }
  else
    MR_Area_Grot = 0;
  document.getElementById('MR_Area_Grot').value = (MR_Area_Grot).toFixed(1);
  // ===================== стаксель
  MR_Staksel_P   = parseFloat(document.getElementById('MR_Staksel_P').value.toString().replace(',','.'));
  MR_Staksel_B   = parseFloat(document.getElementById('MR_Staksel_B').value.toString().replace(',','.'));
  MR_Staksel_E   = parseFloat(document.getElementById('MR_Staksel_E').value.toString().replace(',','.'));
  MR_Staksel_HP  = parseFloat(document.getElementById('MR_Staksel_HP').value.toString().replace(',','.'));
  MR_Staksel_HB  = parseFloat(document.getElementById('MR_Staksel_HB').value.toString().replace(',','.'));
  MR_Staksel_HE  = parseFloat(document.getElementById('MR_Staksel_HE').value.toString().replace(',','.'));
  MR_Staksel_VLM = parseFloat(document.getElementById('MR_Staksel_VLM').value.toString().replace(',','.'));
  if ((MR_Staksel_P > 0) && (MR_Staksel_B > 0) && (MR_Staksel_E > 0) && (MR_Staksel_VLM > 0))
  {
    MR_Area_Staksel= (MR_Staksel_P+MR_Staksel_B+MR_Staksel_E)/2;
    MR_Area_Staksel= (Math.sqrt(MR_Area_Staksel*(MR_Area_Staksel-MR_Staksel_P)*(MR_Area_Staksel-MR_Staksel_B)*(MR_Area_Staksel-MR_Staksel_E))+2/3*MR_Staksel_P*MR_Staksel_HP+2/3*MR_Staksel_B*MR_Staksel_HB+2/3*MR_Staksel_E*MR_Staksel_HE);
    if (isNaN(MR_Area_Staksel)) MR_Area_Staksel = 0;
  }
  else
  if ((MR_Staksel_P > 0) && (MR_Staksel_B > 0) && (MR_Staksel_E > 0) && (MR_Staksel_VLM <= 0))
  {
    MR_Area_Staksel = 0;
    alert ("вкажіть значення VLJ згідно розмірної схемою");
  }
  else
  {
    MR_Area_Staksel = 0;
//    alert ("введите правильные значения хорд и высоты паруса, значения должны быть больше 0 ");
  }
  document.getElementById('MR_Area_Staksel').value = (MR_Area_Staksel).toFixed(1);
  // ===================== кливер
  MR_Kliver_P   = parseFloat(document.getElementById('MR_Kliver_P').value.toString().replace(',','.'));
  MR_Kliver_B   = parseFloat(document.getElementById('MR_Kliver_B').value.toString().replace(',','.'));
  MR_Kliver_E   = parseFloat(document.getElementById('MR_Kliver_E').value.toString().replace(',','.'));
  MR_Kliver_HP  = parseFloat(document.getElementById('MR_Kliver_HP').value.toString().replace(',','.'));
  MR_Kliver_HB  = parseFloat(document.getElementById('MR_Kliver_HB').value.toString().replace(',','.'));
  MR_Kliver_HE  = parseFloat(document.getElementById('MR_Kliver_HE').value.toString().replace(',','.'));
  MR_Kliver_VLM = parseFloat(document.getElementById('MR_Kliver_VLM').value.toString().replace(',','.'));
  if ((MR_Kliver_P > 0) && (MR_Kliver_B > 0) && (MR_Kliver_E > 0) && (MR_Kliver_VLM > 0))
  {
    MR_Area_Kliver = (MR_Kliver_P+MR_Kliver_B+MR_Kliver_E)/2;
    MR_Area_Kliver = (Math.sqrt(MR_Area_Kliver*(MR_Area_Kliver-MR_Kliver_P)*(MR_Area_Kliver-MR_Kliver_B)*(MR_Area_Kliver-MR_Kliver_E))+2/3*MR_Kliver_P*MR_Kliver_HP+2/3*MR_Kliver_B*MR_Kliver_HB+2/3*MR_Kliver_E*MR_Kliver_HE);
    if (isNaN(MR_Area_Kliver)) MR_Area_Kliver = 0;
  }
  else
  if ((MR_Kliver_P > 0) && (MR_Kliver_B > 0) && (MR_Kliver_E > 0) && (MR_Kliver_VLM <= 0))
  {
    MR_Area_Kliver = 0;
    alert ("вкажіть значення VLJ згідно розмірної схемою");
  }
  else
  {
    MR_Area_Kliver = 0;
//    alert ("введите правильные значения хорд и высоты паруса, значения должны быть больше 0 ");
  }
  document.getElementById('MR_Area_Kliver').value = (MR_Area_Kliver).toFixed(1);
  // ===================== спинакер
  MR_Spinaker_P   = parseFloat(document.getElementById('MR_Spinaker_P').value.toString().replace(',','.'));
  MR_Spinaker_B   = parseFloat(document.getElementById('MR_Spinaker_B').value.toString().replace(',','.'));
  MR_Spinaker_E   = parseFloat(document.getElementById('MR_Spinaker_E').value.toString().replace(',','.'));
  MR_Spinaker_SMW = parseFloat(document.getElementById('MR_Spinaker_SMW').value.toString().replace(',','.'));
  if ((MR_Spinaker_P > 0) && (MR_Spinaker_B > 0) && (MR_Spinaker_E > 0) && (MR_Spinaker_SMW > 0))
  {
    MR_Spinaker_SMW_E = ((MR_Spinaker_SMW / MR_Spinaker_E) * 100).toFixed(0);
    MR_Area_Spinaker = MR_Spinaker_P+MR_Spinaker_B+MR_Spinaker_E;
//    MR_Area_Spinaker = Math.round((Math.pow(MR_Area_Spinaker,2)/16).toFixed(1),1);
    MR_Area_Spinaker = (Math.pow(MR_Area_Spinaker,2)/16);
    document.getElementById('MR_Spinaker_SMW_E').value = MR_Spinaker_SMW_E;
    document.getElementById('MR_Area_Spinaker').value = (MR_Area_Spinaker).toFixed(1);
  }
  else
  {
    document.getElementById('MR_Spinaker_SMW_E').value = 0;
    document.getElementById('MR_Area_Spinaker').value = 0;
//    alert ("введите правильные значения хорд и высоты паруса, значения должны быть больше 0 ");
  }
  //
  if ( MR_Area_Grot>0 )
  {
//    if ( MR_Area_Staksel==0 )
//      MR_Main_Sail = MR_Area_Grot; // Основная парусность (кв.м.)
//    else
      MR_Main_Sail = MR_Area_Grot+MR_Area_Staksel+MR_Area_Kliver; // Основная парусность (кв.м.)
  }
  document.getElementById('MR_Main_Sail').value = (MR_Main_Sail).toFixed(1);
  //
  if ( (MR_Area_Spinaker > 0) && (MR_Main_Sail > 0) )
    MR_Spinaker_MainSail = MR_Area_Spinaker/MR_Main_Sail*100; // Отношение спинакера к сновной парусности (%)
  else
    MR_Spinaker_MainSail = 0;
  document.getElementById('MR_Spinaker_MainSail').value = (MR_Spinaker_MainSail).toFixed(1);
  // ======================общие параметры==================================
  L = MR_Length; // расчетная длина
  if (MR_Grot_VLM > 0)
    XM = MR_Grot_VLM*MR_Grot_VLM/MR_Area_Grot; // удлинение грота
  else
    XM = 0;
  //
  ME = 40.1+18.31*XM-2.016*XM*XM+0.07472*XM*XM*XM; // эффективность грота %
  M = MR_Area_Grot*ME/100; // расчетная площадь грота
  // стаксель
  if (MR_Staksel_VLM > 0)
  {
    if (MR_Area_Staksel==0)
    {
      XJ = 0; // удлинение стакселя
      MJ = 0; // эффективность стакселя %
    }
    else
    {
      XJ = MR_Staksel_VLM*MR_Staksel_VLM/MR_Area_Staksel; // удлинение стакселя
      MJ = 40.1+18.31*XJ-2.016*XJ*XJ+0.07472*XJ*XJ*XJ; // эффективность стакселя %
    }
  }
  else
  {
    XJ = 0; // удлинение стакселя
    MJ = 0; // эффективность стакселя %
//    alert ("укажите значение согласно размерной схеме");
  }
  // Кливер
  if (MR_Kliver_VLM > 0)
  {
    if (MR_Area_Kliver==0)
    {
      XK = 0; // удлинение кливера
      MK = 0; // эффективность кливера %
    }
    else
    {
      XK = MR_Kliver_VLM*MR_Kliver_VLM/MR_Area_Kliver; // удлинение стакселя
      MK = 40.1+18.31*XK-2.016*XK*XK+0.07472*XK*XK*XK; // эффективность стакселя %
    }
  }
  else
  {
    XK = 0; // удлинение кливера
    MK = 0; // эффективность кливера %
//    alert ("укажите значение согласно размерной схеме");
  }
  // ===================ГБ без учёта веса экипажа со спин. ====================
  WC = MR_GrevNumber*75; // вес команды (75 кг/чел const)
  W = (MR_GrevNumber*75)+MR_Weight; // расчетный вес
  // стаксель
  if ( MR_Area_Staksel==0 )
    J = 0; // расчетная площадь стакселя
  else
    J = (MR_Area_Staksel*MJ/100)+(0.1*(MR_Area_Spinaker-MR_Area_Staksel-MR_Area_Kliver)); // расчетная площадь стакселя
  // кливер
  if ( MR_Area_Kliver==0 ) 
    K = 0; // расчетная площадь кливера
  else
    K = (MR_Area_Kliver*MK/100); // расчетная площадь кливера
  // -------
  A = M+J+K; // расчетная парусность
  ZM2 = Math.sqrt(W*L)/A; //
  DLR = W/L/L/L; //
  XC4 = 1+(0.0061012*ZM2*L*DLR); // = ошибка
  XC2 = 0.4556343 - (0.473292*ZM2*(1.038881 + (0.4371713*DLR))); //
  XC = (-0.0414213+(-2.554547*ZM2/L)+(0.00132305*ZM2*L*L)); //
  VT_VB = Math.sqrt((-XC2+Math.sqrt(XC2*XC2-4*XC4*XC))/(2*XC4)); //
  R = 0.8*VT_VB*(1-(BC+CMP)/100); // коэфф. деления истинного времени
  if ( (MR_Area_Spinaker > 0) && (R > 0) )
  {
    MR_GB_Spinaker = 1/R;
  }
  else
    MR_GB_Spinaker = 0;
  // ==================ГБ без учёта веса экипажа без спин.==================
  // стаксель
  if ( MR_Area_Staksel==0 )
    J = 0; // расчетная площадь стакселя
  else
    J = (MR_Area_Staksel*MJ/100); // расчетная площадь стакселя
  // кливер
  if ( MR_Area_Kliver==0 ) 
    K = 0; // расчетная площадь кливера
  else
    K = (MR_Area_Kliver*MK/100); // расчетная площадь кливера
  // -------
  A = M+J+K; // расчетная парусность
  ZM2 = Math.sqrt(W*L)/A; //
  DLR = W/L/L/L; //
  XC4 = 1+(0.0061012*ZM2*L*DLR); // = ошибка
  XC2 = 0.4556343 - (0.473292*ZM2*(1.038881 + (0.4371713*DLR))); //
  XC = (-0.0414213+(-2.554547*ZM2/L)+(0.00132305*ZM2*L*L)); //
  VT_VB = Math.sqrt((-XC2+Math.sqrt(XC2*XC2-4*XC4*XC))/(2*XC4)); //
  R = 0.8*VT_VB*(1-(BC+CMP)/100); // коэфф. деления истинного времени
  if ( R > 0 )
  {
    MR_GB = 1/R;
  }
  else
    MR_GB = 0;
  // ================== ГБ с учётом веса экипажа со спин.=======================
  W = MR_Weight+MR_CrewWeight; // расчетный вес
  // стаксель
  if ( MR_Area_Staksel==0 )
    J = 0; // расчетная площадь стакселя
  else
    J = (MR_Area_Staksel*MJ/100)+(0.1*(MR_Area_Spinaker-MR_Area_Staksel)); // расчетная площадь стакселя
  // кливер
  if ( MR_Area_Kliver==0 ) 
    K = 0; // расчетная площадь кливера
  else
    K = (MR_Area_Kliver*MK/100); // расчетная площадь кливера
  // -------
  A = M+J+K; // расчетная парусность
  ZM2 = Math.sqrt(W*L)/A; //
  DLR = W/L/L/L; //
  XC4 = 1+(0.0061012*ZM2*L*DLR); // = ошибка
  XC2 = 0.4556343 - (0.473292*ZM2*(1.038881 + (0.4371713*DLR))); //
  XC = (-0.0414213+(-2.554547*ZM2/L)+(0.00132305*ZM2*L*L)); //
  VT_VB = Math.sqrt((-XC2+Math.sqrt(XC2*XC2-4*XC4*XC))/(2*XC4)); //
  R = 0.8*VT_VB*(1-(BC+CMP)/100); // коэфф. деления истинного времени
  if ( (MR_Area_Spinaker > 0) && (R > 0) )
  {
    MR_GB_CrewWeight_Spinaker = 1/R;
  }
  else
    MR_GB_CrewWeight_Spinaker = 0;
  // ================= ГБ с учётом веса экипажа без спин. =============================
  if ( MR_Area_Staksel==0 )
    J = 0; // расчетная площадь стакселя
  else
    J = (MR_Area_Staksel*MJ/100); // расчетная площадь стакселя
  // кливер
  if ( MR_Area_Kliver==0 ) 
    K = 0; // расчетная площадь кливера
  else
    K = (MR_Area_Kliver*MK/100); // расчетная площадь кливера
  // -------
  A = M+J+K; // расчетная парусность
  ZM2 = Math.sqrt(W*L)/A; //
  DLR = W/L/L/L; //
  XC4 = 1+(0.0061012*ZM2*L*DLR); // = ошибка
  XC2 = 0.4556343 - (0.473292*ZM2*(1.038881 + (0.4371713*DLR))); //
  XC = (-0.0414213+(-2.554547*ZM2/L)+(0.00132305*ZM2*L*L)); //
  VT_VB = Math.sqrt((-XC2+Math.sqrt(XC2*XC2-4*XC4*XC))/(2*XC4)); //
  R = 0.8*VT_VB*(1-(BC+CMP)/100); // коэфф. деления истинного времени
  if ( R > 0 )
    MR_GB_CrewWeight = 1/R;
  else
    MR_GB_CrewWeight = 0;
  // вывод ГБ 
  document.getElementById('MR_GB_Spinaker').value = (MR_GB_Spinaker).toFixed(3);
  document.getElementById('MR_GB').value = (MR_GB).toFixed(3);
  document.getElementById('MR_GB_CrewWeight_Spinaker').value = (MR_GB_CrewWeight_Spinaker).toFixed(3);
  document.getElementById('MR_GB_CrewWeight').value = (MR_GB_CrewWeight).toFixed(3);
  document.getElementById('bsave').disabled = false;
};
