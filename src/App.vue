<template>
  <div id="app">
  <body class="background">
  <br>
  <h1> Beosztás táblázat </h1>
  <br>
  <hr>

  <table class="table-bordered t1 nevek">
  <tr>
    <th colspan="7">&nbsp
      <input id="dolgozo1" type="text" v-model="dolgozok.nev1"
             placeholder="1. Dolgozó neve">
             </input>
             &nbsp</th>
             <td>&nbsp</td>
             <th colspan="7">&nbsp
               <input id="dolgozo2" type="text" v-model="dolgozok.nev2"
                      placeholder="2. Dolgozó neve"/>&nbsp</th>

                      <td>&nbsp</td>
                      <th colspan="7">&nbsp
                        <input id="dolgozo3" type="text" v-model="dolgozok.nev3"
                               placeholder="3. Dolgozó neve"/>&nbsp</th>
                               <td>&nbsp</td>

                               <th colspan="7">&nbsp
                                 <input id="dolgozo4" type="text" v-model="dolgozok.nev4"
                                        placeholder="4. Dolgozó neve"/>&nbsp</th>
                                      <td>&nbsp</td>

                                        <th colspan="7">&nbsp
                                          <input id="datum" type="month" min="2018-09" v-model="dolgozok.date"
                                                 placeholder="Dátum"/>&nbsp</th>




  </tr>
  </table>

    <br>
    <br>
    <table id="printarea" class="tabla1 table-bordered t1 teljes">
      <tr>
        <th colspan="7" id="table1">{{dolgozok.nev1}}</th>

      </tr>

      <tr>
        <th class="t1">#</th>
        <th class="t1">MN</th>
        <th class="t1">&nbsp P &nbsp</th>
        <th class="t1">&nbsp+P&nbsp</th>
        <th class="t1">&nbspSZ&nbsp</th>
        <th class="t1">&nbsp&nbspB&nbsp&nbsp</th>
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
          <input :name="'a'+k" type="radio" id="myInputP('a'+k)" value="b" v-model="i[k].rg" class="uresB clickB"/><label class="clickB" for="myInputB('a'+k)" value="0"></label>
        </td>
        <td class="t1">
          <input class="uresKorr" id="Korr(x)" type="number" min="-6" max="6" v-model="i[k].km"><label for="Korr(x)"></label>
        </td>
      </tr>


    </table>

    <table class="tabla2 table table-bordered t2 koztes">
    <th colspan="7" id="table2">{{dolgozok.nev2}}</th>

      <tr>
        <th class="t2">#</th>
        <th class="t2">MN</th>
        <th class="t2">&nbsp P &nbsp</th>
        <th class="t2">&nbsp+P&nbsp</th>
        <th class="t2">&nbspSZ&nbsp</th>
        <th class="t2">&nbsp&nbspB&nbsp&nbsp</th>
        <th class="t2">+/-</th>
      </tr>




      <tr v-for="(sorb, l) in j">
        <td class="ssz t2 datum">
          {{l+1}}
        </td>
        <td class="t2">
          <input :name="'b'+l" type="radio" id="myInputM_b(l)" value="mn2" v-model="j[l].rg" class="ures_b"/><label class="click_b" for="myInputM_b(l)" value="11"></label>
        </td>
        <td class="t2">
          <input :name="'b'+l" type="radio" id="myInputP_b(l)" value="pn2" v-model="j[l].rg" class="uresP_b clickP_b"/><label class="clickP_b" for="myinputP_b(l)" value="0"></label>
        </td>
        <td class="t2">
          <input :name="'b'+l" type="radio" id="myInputPP_b(l)" value="pp2" v-model="j[l].rg" class="uresPP_b clickPP_b"/><label class="clickPP_b" for="myinputPP_b(l)" value="0"></label>
        </td>
        <td class="t2">
          <input :name="'b'+l" type="radio" id="myInputSZ_b(l)" value="sz2" v-model="j[l].rg" class="uresSZ_b clickSZ_b"/><label class="clickSZ_b" for="myinputSZ_b(l)" value="8"></label>
        </td>
        <td class="t2">
          <input :name="'b'+l" type="radio" id="myInputP_b('b'+l)" value="b2" v-model="j[l].rg" class="uresB_b clickB_b"/><label class="clickB_b" for="myInputB_b('b'+l)" value="0"></label>
        </td>
        <td class="t2">
          <input class="uresKorr_b" id="Korr_b(y)"  type="number" min="-6" max="6" v-model="j[l].ln"><label for="Korr_b(y)"></label>
        </td>
      </tr>


    </table>
    <table class="tabla3 table table-bordered t3 koztes">
    <th colspan="7" id="table3">{{dolgozok.nev3}}</th>
      <tr>
        <th class="t3">#</th>
        <th class="t3">MN</th>
        <th class="t3">&nbsp P &nbsp</th>
        <th class="t3">&nbsp+P&nbsp</th>
        <th class="t3">&nbspSZ&nbsp</th>
        <th class="t3">&nbsp&nbspB&nbsp&nbsp</th>
        <th class="t3">+/-</th>
      </tr>


      <tr v-for="(sorc, m) in l">
        <td class="ssz t3 datum">
          {{m+1}}
        </td>
        <td class="t3">
          <input :name="'c'+m" type="radio" id="myInputM_c" value="mn3" v-model="l[m].rg" class="ures_c"/><label class="click_c" for="myInputM_c" value="11"></label>
        </td>
        <td class="t3">
          <input :name="'c'+m" type="radio" id="myinputP_c" value="pn3" v-model="l[m].rg" class="uresP_c clickP_c"/><label class="clickP_c" for="myinputP_c" value="0"></label>
        </td>
        <td class="t3">
          <input :name="'c'+m" type="radio" id="myinputPP_c" value="pp3" v-model="l[m].rg" class="uresPP_c clickPP_c"/><label class="clickPP_c" for="myinputPP_c" value="0"></label>
        </td>
        <td class="t3">
          <input :name="'c'+m" type="radio" id="myinputSZ_c" value="sz3" v-model="l[m].rg" class="uresSZ_c clickSZ_c"/><label class="clickSZ_c" for="myinputSZ_c" value="8"></label>
        </td>
        <td class="t3">
          <input :name="'c'+m" type="radio" id="myInputP_c('c'+m)" value="b3" v-model="l[m].rg" class="uresB_c clickB_c"/><label class="clickB_c" for="myInputB_c('c'+m)" value="0"></label>
        </td>
        <td class="t3">
          <input class="uresKorr_c" id="Korr_c(z)"  type="number" min="-6" max="6" v-model="l[m].mo"><label for="Korr_c(z)"></label>
        </td>
      </tr>
      </table>

    <table class="tabla4 table table-bordered t4 koztes">
    <th colspan="7" id="table4">{{dolgozok.nev4}}</th>
      <tr>
        <th class="t4">#</th>
        <th class="t4">MN</th>
        <th class="t4">&nbsp P &nbsp</th>
        <th class="t4">&nbsp+P&nbsp</th>
        <th class="t4">&nbspSZ&nbsp</th>
        <th class="t4">&nbsp&nbspB&nbsp&nbsp</th>
        <th class="t4">+/-</th>
      </tr>

      <tr v-for="(sord, n) in m">
        <td class="ssz t4 datum">
          {{n+1}}
        </td>
        <td class="t4">
          <input :name="'d'+n" type="radio" id="myInputM_d" value="mn4" v-model="m[n].rg" class="ures_d"/><label class="click_d" for="myInputM_d" value="11"></label>
        </td>
        <td class="t4">
          <input :name="'d'+n" type="radio" id="myinputP_d" value="pn4" v-model="m[n].rg" class="uresP_d clickP_d"/><label class="clickP_d" for="myinputP_d" value="0"></label>
        </td>
        <td class="t4">
          <input :name="'d'+n" type="radio" id="myInputPP_d" value="pp4" v-model="m[n].rg" class="uresPP_d clickPP_d"/><label class="clickPP_d" for="myInputPP_d" value="0"></label>
        </td>
        <td class="t4">
          <input :name="'d'+n" type="radio" id="myinputSZ_d" value="sz4" v-model="m[n].rg" class="uresSZ_d clickSZ_d"/><label class="clickSZ_d" for="myinputSZ_d" value="8"></label>
        </td>
        <td class="t4">
          <input :name="'d'+n" type="radio" id="myInputP_d('d'+n)" value="b4" v-model="m[n].rg" class="uresB_d clickB_d"/><label class="clickB_d" for="myInputB_d('d'+n)" value="0"></label>
        </td>
        <td class="t4">
          <input class="uresKorr_d" id="Korr_d(zz)"  type="number" min="-6" max="6" v-model="m[n].np"><label for="Korr_d(zz)"></label>
        </td>
      </tr>


    </table>


    <div class="sum1">
      <table border="1">
      <tr>
        <td colspan=4 align="center" class="dolgozo1 t1">
          {{dolgozok.date}}
        </td>
      </tr>
        <tr>
          <td colspan=4 align="center" class="dolgozo1 t1">
            {{dolgozok.nev1}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>B</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td v-model.number="quantity" type="number" class="t1">{{munkaora}}</td>
          <td class="t1">{{ppsz}}</td>
          <td class="t1">{{betegseg}}</td>
          <td class="t1">{{szabadsag}}</td>
        </tr>
        <td colspan=4  class="empty">&nbsp</td>
        <tr>
          <td colspan=4 align="center" class="dolgozo2 t2">
            {{dolgozok.nev2}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>B</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td class="t2">{{munkaora_b}}</td>
          <td class="t2">{{ppsz_b}}</td>
          <td class="t2">{{betegseg_b}}</td>
          <td class="t2">{{szabadsag_b}}</td>
        </tr>
        <td colspan=4  class="empty">&nbsp</td>
        <tr>
          <td colspan=4 align="center" class="dolgozo3 t3">
            {{dolgozok.nev3}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>B</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td class="t3">{{munkaora_c}}</td>
          <td class="t3">{{ppsz_c}}</td>
          <td class="t3">{{betegseg_c}}</td>
          <td class="t3">{{szabadsag_c}}</td>
        </tr>
        <td colspan=4  class="empty">&nbsp</td>
        <tr>
          <td colspan=4 align="center" class="dolgozo4 t4">
            {{dolgozok.nev4}}
          </td>
        </tr>
        <tr>
          <td>Munkaóra</td>
          <td>+P</td>
          <td>B</td>
          <td>Szabadság</td>
        </tr>
        <tr>
          <td class="t4">{{munkaora_d}}</td>
          <td class="t4">{{ppsz_d}}</td>
          <td class="t4">{{betegseg_d}}</td>
          <td class="t4">{{szabadsag_d}}</td>
        </tr>

      </table>

      <button class="btn btn-primary" @click="submit">Mentés Adatbázisba</button><br>
      <button class="btn btn-primary" @click="fetchData" target="_blank">Betöltés Adatbázisból</button>
        <div id="lekerdezes">
      <ul class="list-group">
      <li class="list-group-item" v-for="l in lekerdez">Dátum: {{l.date}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Név: {{l.nev1}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Munkaóra: {{l.munkaora}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Plusz P: {{l.pluszp}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Szabadság: {{l.szabadsag}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Betegség: {{l.betegseg}}</li>
      </ul>


      <ul class="list-group">
      <li class="list-group-item" v-for="l in lekerdez">Név: {{l.nev2}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Munkaóra: {{l.munkaora_b}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Plusz P: {{l.pluszp_b}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Szabadság: {{l.szabadsag_b}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Betegség: {{l.betegseg_b}}</li>
      </ul>
      <ul class="list-group">
      <li class="list-group-item" v-for="l in lekerdez">Név: {{l.nev3}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Munkaóra: {{l.munkaora_c}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Plusz P: {{l.pluszp_c}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Szabadság: {{l.szabadsag_c}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Betegség: {{l.betegseg_c}}</li>
      </ul>
      <ul class="list-group">
      <li class="list-group-item" v-for="l in lekerdez">Név: {{l.nev4}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Munkaóra: {{l.munkaora_d}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Plusz P: {{l.pluszp_d}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Szabadság: {{l.szabadsag_d}}</li>
      <br>
      <li class="list-group-item" v-for="l in lekerdez">Betegség: {{l.betegseg_d}}</li>
      </ul>

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
                    })

            Array(31)
                .fill(0)
                .forEach((v, l) => {
                    ki_b[l] = new Object()
                    ki_b[l].km = 0
                    })

            Array(31)
                .fill(0)
                .forEach((v, m) => {
                    ki_c[m] = new Object()
                    ki_c[m].km = 0
                    })

            Array(31)
                .fill(0)
                .forEach((v, n) => {
                    ki_d[n] = new Object()
                    ki_d[n].km = 0
                    })


            return {
                i: ki,
                j: ki_b,
                l: ki_c,
                m: ki_d,

                dolgozok: {
                nev1: '',
                nev2: '',
                nev3: '',
                nev4: '',
                date: ''
                },
                lekerdez: []
            };
        },

        methods: {
          submit() {
          const dolgozok = {
          nev1: this.dolgozok.nev1,
          nev2: this.dolgozok.nev2,
          nev3: this.dolgozok.nev3,
          nev4: this.dolgozok.nev4,
          date: this.dolgozok.date,
          munkaora: this.munkaora,
          munkaora_b: this.munkaora_b,
          munkaora_c: this.munkaora_c,
          munkaora_d: this.munkaora_d,
          szabadsag: this.szabadsag,
          szabadsag_b: this.szabadsag_b,
          szabadsag_c: this.szabadsag_c,
          szabadsag_d: this.szabadsag_d,
          betegseg: this.betegseg,
          betegseg_b: this.betegseg_b,
          betegseg_c: this.betegseg_c,
          betegseg_d: this.betegseg_d,
          pluszp: this.ppsz,
          pluszp_b: this.ppsz_b,
          pluszp_c: this.ppsz_c,
          pluszp_d: this.ppsz_d
          }
              this.$http.post('https://beosztas-77cd9.firebaseio.com/beosztas.json', dolgozok)
                      .then(response =>{
                        console.log(response);
          }, error=> {
          console.log(error);
          });
        },
        fetchData(){
          this.$http.get('https://beosztas-77cd9.firebaseio.com/beosztas.json')
            .then(response => {
            return response.json()
          })
          .then(dolgozok => {
          const resultArray = [];
          for (let key in dolgozok) {
          resultArray.push(dolgozok[key]);
          }
          this.lekerdez=resultArray;
          });
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
                    .filter(v => v.rg === "b")
                    .reduce((v, k) => v += 0, 0) +
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

            betegseg(x) {
                return this.i
                    .filter(v => v.rg === "b")
                    .length
            },

            munkaora_b(y) {
                let osszeg_b = 0
                this.j
                    .filter(v2 => Number(v2.ln))
                    .forEach((v2, l) => {
                        osszeg_b += Number(v2.ln)
                    })
                return this.j
                    .filter(v2 => v2.rg === "mn2")
                    .reduce((v2, l) => v2 += 11, 0) +
                    this.j
                    .filter(v2 => v2.rg === "b2")
                    .reduce((v2, l) => v2 += 0, 0) +
                    this.j
                    .filter(v2 => v2.rg === "sz2")
                    .reduce((v2, j) => v2 += 8, 0) +
                    osszeg_b
            },
            szabadsag_b(y) {
                return this.j
                    .filter(v2 => v2.rg === "sz2")
                    .length
            },
            ppsz_b(y) {
                return this.j
                    .filter(v2 => v2.rg === "pp2")
                    .length
            },
            betegseg_b(y) {
                return this.j
                    .filter(v2 => v2.rg === "b2")
                    .length
            },

            munkaora_c(z) {
                let osszeg_c = 0
                this.l
                    .filter(v => Number(v.mo))
                    .forEach((v, m) => {
                        osszeg_c += Number(v.mo)
                    })
                return this.l
                    .filter(v => v.rg === "mn3")
                    .reduce((v, m) => v += 11, 0) +
                    this.l
                    .filter(v => v.rg === "b3")
                    .reduce((v, m) => v += 0, 0) +
                    this.l
                    .filter(v => v.rg === "sz3")
                    .reduce((v, m) => v += 8, 0) +
                    osszeg_c
            },
            szabadsag_c(z) {
                return this.l
                    .filter(v => v.rg === "sz3")
                    .length
            },
            ppsz_c(z) {
                return this.l
                    .filter(v => v.rg === "pp3")
                    .length
            },
            betegseg_c(z) {
                return this.l
                    .filter(v => v.rg === "b3")
                    .length
            },

            munkaora_d(zz) {
                let osszeg_d = 0
                this.m
                    .filter(v => Number(v.np))
                    .forEach((v, n) => {
                        osszeg_d += Number(v.np)
                    })
                return this.m
                    .filter(v => v.rg === "mn4")
                    .reduce((v, n) => v += 11, 0) +
                    this.m
                    .filter(v => v.rg === "b4")
                    .reduce((v, m) => v += 0, 0) +
                    this.m
                    .filter(v => v.rg === "sz4")
                    .reduce((v, n) => v += 8, 0) +
                    osszeg_d
            },
            szabadsag_d(zz) {
                return this.m
                    .filter(v => v.rg === "sz4")
                    .length
            },
            ppsz_d(zz) {
                return this.m
                    .filter(v => v.rg === "pp4")
                    .length
            },
            betegseg_d(zz) {
                return this.m
                    .filter(v => v.rg === "b4")
                    .length
            },
        }
    }
</script>

<style>
@media print {
   body *, #printarea * { zoom: 75% }
   #main, #main #printarea, #main #printarea * { display:block; }
}
#app {
width: 100%;
}
*{
  margin: 0;
  padding: 0;
  }

.teljes {
  margin-left: 2%;
}
.koztes {
  margin-left: 2%;
}

.nevek {
  margin-left: 15%;
}

.background{
background: -moz-linear-gradient(top, rgba(30,87,153,0) 0%, rgba(30,87,153,0.8) 15%, rgba(30,87,153,1) 19%, rgba(30,87,153,1) 20%, rgba(41,137,216,1) 50%, rgba(30,87,153,1) 80%, rgba(30,87,153,1) 81%, rgba(30,87,153,0.8) 85%, rgba(30,87,153,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#001e5799',GradientType=0 ); /* IE6-9 */
width: 100%
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
  color: transparent;
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
  background: transparent;
  position: relative;
  display: block;
  content:" ";
}

.uresP + .clickP::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: " ";
}
.uresPP + .clickPP::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: " ";
}
.uresB + .clickB::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: " ";
}

.uresSZ + .clickSZ::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: " ";
}

.uresKorr + .clickKorr::before {
  width: content;
  border-radius: 2px;
  background: transparent;
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
  background: transparent;
  position: relative;
  display: block;
  content:"";
}

.uresP_b + .clickP_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}
.uresPP_b + .clickPP_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}
.uresB_b + .clickB_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresSZ_b + .clickSZ_b::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresKorr_b + .clickKorr_b::before {
  width: content;
  border-radius: 2px;
  background: transparent;
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
  background: transparent;
  position: relative;
  display: block;
  content:"";
}

.uresP_c + .clickP_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresPP_c + .clickPP_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresB_c + .clickB_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresSZ_c + .clickSZ_c::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresKorr_c + .clickKorr_c::before {
  width: content;
  border-radius: 2px;
  background: transparent;
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
  background: transparent;
  position: relative;
  display: block;
  content:"";
}

.uresP_d + .clickP_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresPP_d + .clickPP_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresB_d + .clickB_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresSZ_d + .clickSZ_d::before {
  width: content;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  position: relative;
  display: block;
  content: "";
}

.uresKorr_d + .clickKorr_d::before {
  width: content;
  border-radius: 2px;
  background: transparent;
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
.ssz {

color: white;

}
/* Összesítés*/

.sum1 {
  border: 2px solid black;
  width: content;
  display: inline-block;
  position: fixed;
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
ul{
  border: 4px solid black;
  text-align: left;
  text-transform: uppercase;
  list-style-type: none;
  margin-right: 3px;
}
</style>
