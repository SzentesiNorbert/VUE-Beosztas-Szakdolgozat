<template>
  <div id="app">
  <body class="background">
  <br>
  <h1> Beosztás táblázat </h1>
  <br>
  <hr>

    <table class="table-bordered t1">
    <tr>
      <th colspan="7">&nbsp
        <input type="text" v-model="nev1"
               placeholder="1. Dolgozó neve"/>
               </input>
               &nbsp</th>
               <td>&nbsp</td>
               <th colspan="7">&nbsp
                 <input type="text" v-model="nev2"
                        placeholder="2. Dolgozó neve"/>&nbsp</th>
                      </input>
                        </th>
                        <td>&nbsp</td>
                        <th colspan="7">&nbsp
                          <input type="text" v-model="nev3"
                                 placeholder="3. Dolgozó neve"/>&nbsp</th>
                                 <td>&nbsp</td>
                                 </input>
                                 </th>
                                 <th colspan="7">&nbsp
                                   <input type="text" v-model="nev4"
                                          placeholder="4. Dolgozó neve"/>&nbsp</th>
                                        </input>
                                        <td>&nbsp</td>
                                          </th>
                                          <th colspan="7">&nbsp
                                            <input type="month" min="2018-09" v-model="date"
                                                   placeholder="Dátum">&nbsp</th>
                                                 </input>
                                                 <td>&nbsp</td>
                                                   </th>

    </tr>
    </table>
    <br>
    <br>
    <table class="tabla1 table-bordered t1">
      <tr>
        <th colspan="7" id="table1">{{nev1}}</th>

      </tr>

      <tr>
        <th class="t1">#</th>
        <th class="t1">MN</th>
        <th class="t1">&nbsp P &nbsp</th>
        <th class="t1">&nbsp+P&nbsp</th>
        <th class="t1">&nbspSZ&nbsp</th>
        <th class="t1">&nbspB&nbsp</th>
        <th class="t1">+/-</th>
      </tr>


      <tr v-for="(sora, k) in i">
        <td class="ssz t1 datum">
          {{k+1}}
        </td>
        <td class="t1">
          <input :name="'a'+k" type="radio" id="myInputM(k)" value="mn" v-model="i[k].rg" class="ures"/><label class="click" for="myInputM(k)" value="11"></label>
        </td>
        <td class="t1">
          <input :name="'a'+k" type="radio" id="myInputP('a'+k)" value="pn" v-model="i[k].rg" class="uresP clickP"/><label class="clickP" for="myInputP('a'+k)" value="0"></label>
        </td>
        <td class="t1">
          <input :name="'a'+k" type="radio" id="myInputPP('a'+k)" value="pp" v-model="i[k].rg" class="uresPP clickPP"/><label class="clickPP" for="myInputPP('a'+k)" value="0"></label>
        </td>
        <td class="t1">
          <input :name="'a'+k" type="radio" id="myInputSZ('a'+k)" value="sz" v-model="i[k].rg" class="uresSZ clickSZ"/><label class="clickSZ" for="myInputSZ('a'+k)" value="8"></label>
        </td>
        <td class="t1">
          <input type="checkbox" id="myInputB(x++)" v-model="i[k].a" class="uresB" value="a"/><label class="clickB" for="myInputB(x++)" value="8"></label>
        </td>
        <td class="t1">
          <input class="uresKorr" id="Korr(x)" type="number" min="-6" max="6" v-model="i[k].km"><label for="Korr(x)"></label>
        </td>
      </tr>


    </table>

    <table class="tabla2 table table-bordered t2">
    <th colspan="7" id="table2">{{nev2}}</th>

      <tr>
        <th class="t2">#</th>
        <th class="t2">MN</th>
        <th class="t2">&nbsp P &nbsp</th>
        <th class="t2">&nbsp+P&nbsp</th>
        <th class="t2">&nbspSZ&nbsp</th>
        <th class="t2">&nbspB&nbsp</th>
        <th class="t2">+/-</th>
      </tr>




      <tr v-for="(sorb, k) in j">
        <td class="ssz t2 datum">
          {{k+1}}
        </td>
        <td class="t2">
          <input :name="'b'+k" type="radio" id="myInputM_b(k)" value="mn2" v-model="i[k].rg" class="ures_b"/><label class="click_b" for="myInputM_b(k)" value="11"></label>
        </td>
        <td class="t2">
          <input :name="'b'+k" type="radio" id="myInputP_b(k)" value="pn2" v-model="i[k].rg" class="uresP_b clickP_b"/><label class="clickP_b" for="myinputP_b(k)" value="0"></label>
        </td>
        <td class="t2">
          <input :name="'b'+k" type="radio" id="myInputPP_b(k)" value="pp2" v-model="i[k].rg" class="uresPP_b clickPP_b"/><label class="clickPP_b" for="myinputPP_b(k)" value="0"></label>
        </td>
        <td class="t2">
          <input :name="'b'+k" type="radio" id="myInputSZ_b(k)" value="sz2" v-model="i[k].rg" class="uresSZ_b clickSZ_b"/><label class="clickSZ_b" for="myinputSZ_b(k)" value="8"></label>
        </td>
        <td class="t2">
          <input type="checkbox" id="myinputB_b(k)" v-model="i[k].b" class="uresB_b" value="b"/><label class="clickB_b" for="myinputB_b(k)" value="8"></label>
        </td>
        <td class="t2">
          <input id="Korr_b(k)" class="uresKorr" type="number" min="-6" max="6" v-model="i[k].kn">
        </td>
      </tr>


    </table>
    <table class="tabla3 table table-bordered t3">
    <th colspan="7" id="table3">{{nev3}}</th>
      <tr>
        <th class="t3">#</th>
        <th class="t3">MN</th>
        <th class="t3">&nbsp P &nbsp</th>
        <th class="t3">&nbsp+P&nbsp</th>
        <th class="t3">&nbspSZ&nbsp</th>
        <th class="t3">&nbspB&nbsp</th>
        <th class="t3">+/-</th>
      </tr>




      <tr v-for="(sorc, k) in l">
        <td class="ssz t3 datum">
          {{k+1}}
        </td>
        <td class="t3">
          <input :name="'c'+k" type="radio" id="myInputM_c" value="mn3" v-model="i[k].rg" class="ures_c"/><label class="click_c" for="myInputM_c" value="11"></label>
        </td>
        <td class="t3">
          <input :name="'c'+k" type="radio" id="myinputP_c" value="pn3" v-model="i[k].rg" class="uresP_c clickP_c"/><label class="clickP_c" for="myinputP_c" value="0"></label>
        </td>
        <td class="t3">
          <input :name="'c'+k" type="radio" id="myinputPP_c" value="pp3" v-model="i[k].rg" class="uresPP_c clickPP_c"/><label class="clickPP_c" for="myinputPP_c" value="0"></label>
        </td>
        <td class="t3">
          <input :name="'c'+k" type="radio" id="myinputSZ_c" value="sz3" v-model="i[k].rg" class="uresSZ_c clickSZ_c"/><label class="clickSZ_c" for="myinputSZ_c" value="8"></label>
        </td>
        <td class="t3">
          <input type="checkbox" id="myinputB_c" v-model="i[k].c" class="uresB_c" value="b3"/><label class="clickB_c" for="myinputB_c" value="8"></label>
        </td>
        <td class="t3">
          <input class="uresKorr" type="number" min="-6" max="6" v-model="i[k].ko">
        </td>
      </tr>


    </table>
    <table class="tabla4 table table-bordered t4 dolgozo4">
    <th colspan="7" id="table4">{{nev4}}</th>
      <tr>
        <th class="t4">#</th>
        <th class="t4">MN</th>
        <th class="t4">&nbsp P &nbsp</th>
        <th class="t4">&nbsp+P&nbsp</th>
        <th class="t4">&nbspSZ&nbsp</th>
        <th class="t4">&nbspB&nbsp</th>
        <th class="t4">+/-</th>
      </tr>




      <tr v-for="(sord, k) in i">
        <td class="ssz t4 datum">
          {{k+1}}
        </td>
        <td class="t4">
          <input :name="'d'+k" type="radio" id="myInputM_d" value="mn4" v-model="i[k].rg" class="ures_d"/><label class="click_d" for="myInputM_d" value="11"></label>
        </td>
        <td class="t4">
          <input :name="'d'+k" type="radio" id="myinputP_d" value="pn4" v-model="i[k].rg" class="uresP_d clickP_d"/><label class="clickP_d" for="myinputP_d" value="0"></label>
        </td>
        <td class="t4">
          <input :name="'d'+k" type="radio" id="myInputPP_d" value="pp4" v-model="i[k].rg" class="uresPP_d clickPP_d"/><label class="clickPP_d" for="myInputPP_d" value="0"></label>
        </td>
        <td class="t4">
          <input :name="'d'+k" type="radio" id="myinputSZ_d" value="sz4" v-model="i[k].rg" class="uresSZ_d clickSZ_d"/><label class="clickSZ_d" for="myinputSZ_d" value="8"></label>
        </td>
        <td class="t4">
          <input type="checkbox" id="myinputB_d" v-model="i[k].d" class="uresB_d" value="b4"/><label class="clickB_d" for="myinputB_d" value="8"></label>
        </td>
        <td class="t4">
          <input id="myInputKorr4" class="uresKorr_d" type="number" min="-6" max="6" v-model="i[k].kp"><label for="myInputKorr4"></label>
        </td>
      </tr>


    </table>


    <div  class="sum1">
      <table border="1">
      <tr>
        <td colspan=3 align="center" class="dolgozo1 t1">
          {{date}}
        </td>
      </tr>
        <tr>
          <td colspan=3 align="center" class="dolgozo1 t1">
            {{nev1}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td  v-html="munkaora" class="t1"></td>
          <td v-html="ppsz" class="t1"></td>
          <td v-html="szabadsag" class="t1"></td>
        </tr>
        <td colspan=3  class="empty">&nbsp</td>
        <tr>
          <td colspan=3 align="center" class="dolgozo2 t2">
            {{nev2}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td v-html="munkaora_b" class="t2"></td>
          <td v-html="ppsz_b" class="t2"></td>
          <td v-html="szabadsag_b" class="t2"></td>
        </tr>
        <td colspan=3  class="empty">&nbsp</td>
        <tr>
          <td colspan=3 align="center" class="dolgozo3 t3">
            {{nev3}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td v-html="munkaora_c" class="t3"></td>
          <td v-html="ppsz_c" class="t3"></td>
          <td v-html="szabadsag_c" class="t3"></td>
        </tr>
        <td colspan=3  class="empty">&nbsp</td>
        <tr>
          <td colspan=3 align="center" class="dolgozo4 t4">
            {{nev4}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td v-html="munkaora_d" class="t4"></td>
          <td v-html="ppsz_d" class="t4"></td>
          <td v-html="szabadsag_d" class="t4"></td>
        </tr>

      </table>
      <div class="print">
        <button class="btn-primary" onclick="content.print()">Nyomtatás</button>
      </div>
    </div>
    </body>
  </div>

</template>

<script>
    export default {
        name: 'app',
        data() {
            let ki = []
            let ki_b = []
            let ki_c = []
            let ki_d = []
            Array(31)
                .fill(0)
                .forEach((v, k) => {
                    ki[k] = new Object()
                    ki[k].km = 0
                    ki_b[k] = new Object()
                    ki_b[k].kn = 0
                    ki_c[k] = new Object()
                    ki_c[k].ko = 0
                    ki_d[k] = new Object()
                    ki_d[k].kp = 0
                })
            return {
                i: ki,
                j: ki_b,
                l: ki_c,
                m: ki_d
            }
        },

        methods: {
            ujDolg() {
                var nev = document.getElementById('nevi').value;
                var tabla = document.getElementById('nev1')[0];
                var dolgozo = table.insertRow(0);
                var cell = dolgozo.insertCell(0);
                cell.innerHTML = nev1;
            }
        },
        computed: {
            munkaora(x) {
                let osszeg = 0
                this.i
                    .filter(v => Number(v.km))
                    .forEach((v, k) => {
                        osszeg += Number(v.km)
                    })
                return this.i
                    .filter(v => v.rg === "mn")
                    .reduce((v, k) => v += 11, 0) +
                    this.i
                    .filter(v => v.rg === "sz")
                    .reduce((v, k) => v += 8, 0) +
                    osszeg
            },
            szabadsag(x) {
                return this.i
                    .filter(v => v.rg === "sz")
                    .length
            },
            ppsz(x) {
                return this.i
                    .filter(v => v.rg === "pp")
                    .length
            },

            munkaora_b(y) {
                let osszeg_b = 0
                this.i
                    .filter(v2 => Number(v2.kn))
                    .forEach((v2, k2) => {
                        osszeg_b += Number(v2.kn)
                    })
                return this.i
                    .filter(v2 => v2.rg === "mn2")
                    .reduce((v2, k2) => v2 += 11, 0) +
                    this.i
                    .filter(v2 => v2.rg === "sz2")
                    .reduce((v2, k2) => v2 += 8, 0) +
                    osszeg_b
            },
            szabadsag_b(y) {
                return this.i
                    .filter(v2 => v2.rg === "sz2")
                    .length
            },
            ppsz_b(y) {
                return this.i
                    .filter(v2 => v2.rg === "pp2")
                    .length
            },

            munkaora_c(z) {
                let osszeg_c = 0
                this.i
                    .filter(v => Number(v.ko))
                    .forEach((v, k) => {
                        osszeg_c += Number(v.ko)
                    })
                return this.i
                    .filter(v => v.rg === "mn3")
                    .reduce((v, k) => v += 11, 0) +
                    this.i
                    .filter(v => v.rg === "sz3")
                    .reduce((v, k) => v += 8, 0) +
                    osszeg_c
            },
            szabadsag_c(z) {
                return this.i
                    .filter(v => v.rg === "sz3")
                    .length
            },
            ppsz_c(z) {
                return this.i
                    .filter(v => v.rg === "pp3")
                    .length
            },

            munkaora_d(zz) {
                let osszeg_d = 0
                this.i
                    .filter(v => Number(v.kp))
                    .forEach((v, k) => {
                        osszeg_d += Number(v.kp)
                    })
                return this.i
                    .filter(v => v.rg === "mn4")
                    .reduce((v, k) => v += 11, 0) +
                    this.i
                    .filter(v => v.rg === "sz4")
                    .reduce((v, k) => v += 8, 0) +
                    osszeg_d
            },
            szabadsag_d(zz) {
                return this.i
                    .filter(v => v.rg === "sz4")
                    .length
            },
            ppsz_d(zz) {
                return this.i
                    .filter(v => v.rg === "pp4")
                    .length
            }
        }
    }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.background{
background: -moz-linear-gradient(top, rgba(30,87,153,0) 0%, rgba(30,87,153,0.8) 15%, rgba(30,87,153,1) 19%, rgba(30,87,153,1) 20%, rgba(41,137,216,1) 50%, rgba(30,87,153,1) 80%, rgba(30,87,153,1) 81%, rgba(30,87,153,0.8) 85%, rgba(30,87,153,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#001e5799',GradientType=0 ); /* IE6-9 */
}

.tabla1{
    position: relative;
    display: inline-block;
    border: 5px double black;
}

.tabla2{
  position: relative;
  display: inline-block;
  border: 5px double green;
}
.tabla3{
  position: relative;
  display: inline-block;
  border: 5px double red;
}

.tabla4{
  position: relative;
  display: inline-block;
  border: 5px double blue;
}



.t1 {
  border: 3px solid black;
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: center;
}
th {
  text-align: center;
}

h1 {
  text-align: center;
}

.datum {
  text-align: center;
  background-color: black;
  color: white;
}

.ures {
  display: hidden;
}
.uresP {
  display: hidden;
}
.uresPP {
  display: hidden;
}
.uresB {
  display: hidden;
}
.uresSZ {
  display: hidden;
}
.uresKorr {
width: 30px;
}

.click {
  cursor: pointer;
}
.clickP {
  cursor: pointer;
}
.clickPP {
  cursor: pointer;
}

.clickSZ {
  cursor: pointer;
}
.clickB {
  cursor: pointer;
}

.ures + .click::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content:" ";
}

.uresP + .clickP::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: " ";
}
.uresPP + .clickPP::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: " ";
}
.uresB + .clickB::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: " ";
}

.uresSZ + .clickSZ::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: " ";
}

.uresKorr + .clickKorr::before {
  width: content;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: " ";
}

.uresB:checked + .clickB::before {
  background: yellow;
}

.uresP:checked + .clickP::before {
  background: blue;
}
.uresPP:checked + .clickPP::before {
  background: purple;
}
.uresSZ:checked + .clickSZ::before {
  background: green;
}

.ures:checked + .click::before {
  background: black;
}

/*Tábla 2*/
/*
.ures_b {
  display: none;
}
.uresP_b {
  display: none;
}
.uresPP_b {
  display: none;
}
.uresB_b {
  display: none;
}
.uresSZ_b {
  display: none;
}*/
.uresKorr_b {
width: 30px;
}

.click_b {
  cursor: pointer;
}
.clickP_b {
  cursor: pointer;
}
.clickPP_b {
  cursor: pointer;
}
.clickSZ_b {
  cursor: pointer;
}
.clickB_b {
  cursor: pointer;
}

.t2 {
  border: 3px solid green;
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: center;
}

.ures_b + .click_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content:"";
}

.uresP_b + .clickP_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}
.uresPP_b + .clickPP_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}
.uresB_b + .clickB_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresSZ_b + .clickSZ_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresKorr_b + .clickKorr_b::before {
  width: content;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresB_b:checked + .clickB_b::before {
  background: yellow;
}

.uresP_b:checked + .clickP_b::before {
  background: blue;
}
.uresPP_b:checked + .clickPP_b::before {
  background: purple;
}
.uresSZ_b:checked + .clickSZ_b::before {
  background: green;
}

.ures_b:checked + .click_b::before {
  background: black;
}

/*Tábla 3*/
/*
.ures_c {
  display: none;
}
.uresP_c {
  display: none;
}
.uresPP_c {
  display: none;
}
.uresB_c {
  display: none;
}
.uresSZ_c {
  display: none;
}*/
.uresKorr_c {
width: 30px;
}

.click_c {
  cursor: pointer;
}
.clickP_c {
  cursor: pointer;
}
.clickPP_c {
  cursor: pointer;
}
.clickSZ_c {
  cursor: pointer;
}


.t3 {
  border: 3px solid red;
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: center;
}

.ures_c + .click_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content:"";
}

.uresP_c + .clickP_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresPP_c + .clickPP_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresB_c + .clickB_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresSZ_c + .clickSZ_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresKorr_c + .clickKorr_c::before {
  width: content;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresB_c:checked + .clickB_c::before {
  background: yellow;
}

.uresP_c:checked + .clickP_c::before {
  background: blue;
}
.uresPP_c:checked + .clickPP_c::before {
  background: purple;
}
.uresSZ_c:checked + .clickSZ_c::before {
  background: green;
}

.ures_c:checked + .click_c::before {
  background: black;
}

.clickB_c {
  cursor: pointer;
}

/*Tábla 4*/
/*
.click_d {
  cursor: pointer;
}
.clickP_d {
  cursor: pointer;
}

.clickPP_d {
  cursor: pointer;
}

.clickSZ_d {
  cursor: pointer;
}
.clickB_d {
  cursor: pointer;
}*/
/*
.ures_d {
  display: none;
}
.uresP_d {
  display: none;
}
.uresPP_d {
  display: none;
}
.uresB_d {
  display: none;
}
.uresSZ_d {
  display: none;
}*/
.uresKorr_d {
width: 30px;
}

.t4 {
  border: 3px solid blue;
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: center;
}

.ures_d + .click_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content:"";
}

.uresP_d + .clickP_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresPP_d + .clickPP_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresB_d + .clickB_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresSZ_d + .clickSZ_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresKorr_d + .clickKorr_d::before {
  width: content;
  border-radius: 2px;
  background: white;
  position: relative;
  display: block;
  content: "";
}

.uresB_d:checked + .clickB_d::before {
  background: yellow;
}

.uresP_d:checked + .clickP_d::before {
  background: blue;
}
.uresPP_d:checked + .clickPP_d::before {
  background: purple;
}
.uresSZ_d:checked + .clickSZ_d::before {
  background: green;
}

.ures_d:checked + .click_d::before {
  background: black;
}

/* Összesítés*/

.sum1 {
  border: 2px solid black;
  width: 167px;
  display: inline-block;
  position: absolute;
  margin-left: 20px;
  text-align: center;
}
.empty {
  background-color: black;
}
.dolgozo1{
  border: 2px double black;
}
.dolgozo2{
  border: 2px double green;
}
.dolgozo3{
  border: 2px double red;
}
.dolgozo4{
  border: 2px double blue;
}

</style>
