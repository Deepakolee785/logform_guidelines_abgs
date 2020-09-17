import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-versus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Javanese" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={styles.block_154}>
                <span className={styles.text_}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>this section.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <div id="fragment-versus-sentences">
                <p className={'heading'}>Fragments versus sentences </p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.&nbsp;
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_}>
                    Sometimes a phrase which is not obviously grammatically a
                    sentence should&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    nevertheless be treated as a sentence because of its
                    context, e.g. if it's an answer to a&nbsp;
                  </span>
                </p>
                <p className={styles.block_157}>
                  <span className={styles.text_}>
                    specific question, or if it's an example where dropping the
                    subject sounds completely&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    natural as a complete sentence.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_158}>
                  Correct: Awakmu ngomongna sapa?&nbsp; Sedulurmu ing
                  Pati.&nbsp;
                </p>
                <p className={styles.block_159}>
                  Explanation: Dua penutur. "Sedulurmu." adalah&nbsp; jawaban
                  atas pertanyaan spesifik.&nbsp;
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_18}>
                    Correct: sedulurmu ing Pati&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Tidak ada konteks yang&nbsp; menandakan ini
                    adalah kalimat; dianggap&nbsp;
                  </span>
                </p>
                <p className={styles.block_161}>sebagai fragmen.&nbsp;</p>
                <p className={styles.block_162}>
                  <span className={styles.text_18}>
                    Correct: Teko gak nang acarane Budi sesuk?&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Meniadakan subyek di sini terasa&nbsp; natural
                    sebagai kalimat lengkap. Beri tanda&nbsp;
                  </span>
                </p>
                <p className={styles.block_163}>baca sebagai kalimat.&nbsp;</p>
                <p className={styles.block_164}>
                  <span className={styles.text_18}>
                    Correct: ngumbah klambi ing bak&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Terasa seperti penelusuran web&nbsp; dibanding
                    dengan peniadaan subyek. Beri tanda&nbsp;
                  </span>
                </p>
                <p className={styles.block_165}>baca sebagai fragmen.&nbsp;</p>
                <p className={styles.block_166}>
                  <span className={styles.text_}>
                    Interjections, greetings, and farewells said in isolation
                    should be considered complete&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    sentences and punctuated as such.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_167}>
                  <span className={styles.text_18}>Correct: Mosok.&nbsp; </span>
                  <span className={styles.text_19}>
                    Explanation: interjeksi&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_18}>
                    Correct: Slamet ing salakumu.&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Keseluruhan frasa digunakan&nbsp; sebagai
                    interjeksi.&nbsp;
                  </span>
                </p>
                <p className={styles.block_169}>
                  <span className={styles.text_18}>
                    Correct: Sugeng enjing.&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: salam&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_}>
                    Capitalize sentence fragments that sound like the beginning
                    of a sentence. Add end&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    punctuation to sentence fragments that sound like the end of
                    a sentence. For fragments&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    that do not clearly sound like the beginning or end of a
                    sentence, leave out capitalization&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    and punctuation. Note that sentence fragments may be a
                    result of cut-off audio&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>samples.&nbsp;</span>
                </p>
                <p className={styles.block_171}>
                  Correct: Yok opo menurutmu? Iki duduk&nbsp; perkara&nbsp;
                </p>
                <p className={styles.block_172}>
                  Correct: sing gampang. Kabeh kudu disiapno&nbsp; tekan
                  saiki.&nbsp;
                </p>
                <p className={styles.block_173}>
                  Correct: pancen angel banget, mulane aja&nbsp; gampang
                  nglokro.&nbsp;
                </p>
                <p className={styles.block_174}>
                  Correct: Aku arep ngopi nang warung. Aku arep&nbsp; pesen Piro
                  regane cappuccino?&nbsp;
                </p>
                <p className={styles.block_175}>
                  Explanation: Fragmen kalimat awal yang&nbsp; berakhir di
                  tengah-tengah kalimat.&nbsp;
                </p>
                <p className={styles.block_176}>
                  Explanation: Fragmen kalimat akhir yang&nbsp; diawali dari
                  tengah-tengah kalimat.&nbsp;
                </p>
                <p className={styles.block_177}>
                  Explanation: Audio terpotong di awal kalimat.&nbsp;
                </p>
                <p className={styles.block_178}>
                  Explanation: Jangan beri titik, tanda hubung,&nbsp; atau
                  elipsis setelah fragmen, meski diikuti&nbsp; kalimat
                  lain.&nbsp;
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_18}>
                    Correct: Ngendi Ngendi pantaine?&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Perulangan awal kalimat.&nbsp;
                  </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_18}>
                    Correct: Piro regane Ngendi&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Keduanya terdengar seperti&nbsp; permulaan
                    kalimat.&nbsp;
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_18}>
                    Correct: wis metu tapi bingung arep&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Terdengar seperti pertengahan&nbsp; kalimat;
                    audio di awal dan akhir kalimat&nbsp;
                  </span>
                </p>
                <p className={styles.block_182}>terpotong.&nbsp;</p>
                <p className={styles.block_183}>
                  <span className={styles.text_}>
                    If an utterance is not clearly a sentence according to the
                    above rules and examples, do&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    not capitalize or punctuate it as a sentence.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_185}>
                  <span className={styles.text_}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>intonation.&nbsp;</span>
                </p>
                <p className={styles.block_186}>
                  Correct: Ning endi pom bensin paling cedhak?&nbsp;
                </p>
                <p className={styles.block_187}>
                  Incorrect: Ning endhi, pom bensin, paling&nbsp; cedhak?&nbsp;
                </p>
                <p className={styles.block_188}>
                  Explanation: Meski penutur menggunakan jeda&nbsp; yang
                  panjang, jangan gunakan koma untuk&nbsp; menunjukkan jeda
                  tersebut. Penggunaan koma&nbsp; diperbolehkan atau diperlukan
                  di&nbsp;
                </p>
                <p className={styles.block_189}>
                  tempat-tempat tertentu, namun tidak untuk&nbsp; contoh
                  ini.&nbsp;
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_}>
                    Use a comma when a sentence starts with a discourse word,
                    interjection, or yes/no&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    word. However: If there is a long pause between a discourse
                    word, interjection, or&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    yes/no word and a full sentence that follows it, treat that
                    initial word as a separate&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>sentence.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_18}>
                    Correct: Ojo muleh sek, to.&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Kata diskursus (parikel diskursus).&nbsp;{' '}
                  </span>
                  <span className={styles.text_18}>
                    Correct: Iyo. Aku bisa nglakoni.&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: jeda substansial setelah kata "iyo"&nbsp;
                  </span>
                </p>
                <p className={styles.block_192}>
                  Correct: Biyoh-biyoh, awakmu pantes gawe&nbsp; klambi
                  iki.&nbsp;
                </p>
                <p className={styles.block_193}>
                  Explanation: Interjeksi.&nbsp;
                </p>
                <p className={styles.block_194}>
                  <span className={styles.text_}>
                    The phrase "Ok Google" in isolation is transcribed without a
                    comma or end punctuation.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    When the phrase appears before longer utterances, place a
                    comma after "Google".&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>Correct: Ok Google&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Ok Google, gambare jembatan kali&nbsp;
                </p>
                <p className={styles.block_195}>lanang&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Ok Google, ning endi ono warung&nbsp;
                </p>
                <p className={styles.block_128}>mangan paling cedhak?&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Ok Google, kirim SMS nang Johan.&nbsp;
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_197}>
                  <span className={styles.text_}>
                    Capitalize and punctuate the following as questions: 1) All
                    queries syntactically built as&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    questions, regardless of intonation. 2) All queries which
                    sound like they are being used&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    as questions, regardless of sentence structure.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_18}>
                    Correct: Awakmu serius?&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Secara sintaksis berstruktur&nbsp; seperti
                    kalimat pertanyaan, jadi beri tanda baca&nbsp;
                  </span>
                </p>
                <p className={styles.block_199}>
                  sebagai pertanyaan, terlepas dari intonasinya.&nbsp;
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_18}>
                    Correct: Jam 3 esuk?&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Intonasi naik menyiratkan bahwa&nbsp; ini
                    adalah pertanyaan, jadi beri tanda baca&nbsp;
                  </span>
                </p>
                <p className={styles.block_201}>
                  sebagai pertanyaan, terlepas dari struktur&nbsp;
                </p>
                <p className={styles.block_202}>kalimatnya.&nbsp;</p>
                <p className={styles.block_203}>
                  <span className={styles.text_18}>
                    Correct: cuaca ing Jakarta&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Kueri ini memiliki intonasi naik,&nbsp; namun
                    sepertinya merupakan penelusuran web&nbsp;
                  </span>
                </p>
                <p className={styles.block_204}>dibanding pertanyaan.&nbsp;</p>
                <p className={styles.block_205}>
                  <span className={styles.text_}>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation point. If there is&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    any doubt, err on the side of using period.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_167}>
                  <span className={styles.text_18}>Correct: Hore!&nbsp; </span>
                  <span className={styles.text_19}>
                    Explanation: Penutur terdengar bersemangat.&nbsp;
                  </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_18}>Correct: Hore.&nbsp; </span>
                  <span className={styles.text_19}>
                    Explanation: Penutur terdengar tidak&nbsp;
                    bersemangat.&nbsp;
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_208}>
                  <span className={styles.text_}>
                    Use a comma between reported speech verbs and direct
                    quotations. Do not put&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    punctuation within quotation marks unless the punctuation
                    belongs to the reported&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>speech.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_18}>
                    Correct: Kancaku ngomong, "bukuku".&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Incorrect: Kancaku ngomong, "bukuku."&nbsp; Incorrect:
                    Kancaku ngomong "bukuku."&nbsp; Incorrect: Kancaku ngomong
                    "bukuku".&nbsp;
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_18}>
                    Correct: Ngomongo "onomatopoeia".&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Incorrect: Ngomongo, "onomatopoeia".&nbsp;
                  </span>
                </p>
                <p className={styles.block_211}>
                  Explanation: Kata "ngomong" adalah kata kerja&nbsp; ujaran
                  langsung dalam bahasa Jawa.&nbsp;
                </p>
                <p className={styles.block_212}>
                  Explanation: Jangan beri koma jika kata&nbsp; kerjanya
                  berbentuk imperatif.&nbsp;
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_}>
                    If the text in quotation marks qualifies as a sentence,
                    punctuate as if it were its own&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    utterance. Do not alter its end punctuation even if the
                    quote is within a sentence. Do not&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    add excess punctuation after end quotation marks.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_214}>
                  Correct: Dewi ngomong, "Ayo ketemu jam 3."&nbsp;
                </p>
                <p className={styles.block_215}>
                  Incorrect: Dewi ngomong, "Ayo ketemu jam&nbsp; 3:00.".&nbsp;
                </p>
                <p className={styles.block_216}>
                  <span className={styles.text_18}>
                    Correct: Putri takon, "Sido ketemu jam 3?"&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Incorrect: Putri takon, "Sido ketemu jam 3?".&nbsp;
                  </span>
                </p>
                <p className={styles.block_217}>
                  Correct: Opo Lastri ngomong, "Ketemu aku&nbsp; nang
                  sekolah."&nbsp;
                </p>
                <p className={styles.block_218}>
                  Incorrect: Opo Lastri ngomong, "Ketemu aku&nbsp; nang
                  sekolah."?&nbsp;
                </p>
                <p className={styles.block_219}>
                  Explanation: Teks dalam tanda kutip memenuhi&nbsp; syarat
                  sebagai kalimat. Jangan tambahkan&nbsp; tanda baca lagi.&nbsp;
                </p>
                <p className={styles.block_220}>
                  Explanation: Teks dalam tanda kutip memenuhi&nbsp; syarat
                  sebagai kalimat. Jangan tambahkan&nbsp; tanda baca lagi.&nbsp;
                </p>
                <p className={styles.block_221}>
                  Explanation: Teks dalam tanda kutip memenuhi&nbsp; syarat
                  sebagai kalimat. Jangan tambahkan&nbsp; tanda baca lagi.&nbsp;
                </p>
                <p className={styles.block_222}>
                  Correct: Adi ngomong, "Aku bakal bali maneh.&nbsp; Aku janji."
                  tanpa mriksa jadwale.&nbsp;
                </p>
                <p className={styles.block_223}>
                  Explanation: Teks dalam tanda kutip memenuhi&nbsp; syarat
                  sebagai kalimat. Jangan ubah tanda&nbsp; baca akhirnya meski
                  kutipan berada dalam&nbsp; kalimat.&nbsp;
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_}>
                    Use a colon but no quotation marks in quotative voice
                    actions when the quote follows&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    the command. Use quotation marks when the quote is in the
                    middle of the sentence.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_225}>
                  Correct: Terjemahake menyang basa Inggris:&nbsp; Piye
                  kabarmu?&nbsp;
                </p>
                <p className={styles.block_226}>
                  Correct: Terjemahake "Piye kabarmu?"&nbsp; menyang basa
                  Inggris.&nbsp;
                </p>
                <p className={styles.block_227}>
                  Correct: Coba ngomong "Aku tresno sliramu."&nbsp; ing basa
                  Inggris?&nbsp;
                </p>
                <p className={styles.block_228}>
                  Incorrect: Coba ngomong, "Aku tresno sliramu."&nbsp; ing basa
                  Inggris?&nbsp;
                </p>
                <p className={styles.block_229}>
                  Correct: Kirim nang example@gmail.com: Halo,&nbsp; piye
                  kabarmu?&nbsp;
                </p>
                <p className={styles.block_230}>
                  Correct: Kirim email nang example@gmail.com&nbsp; sing isine:
                  Halo, piye kabarmu?&nbsp;
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_232}>
                  Explanation: Kutipan mengikuti perintahnya,&nbsp; jadi gunakan
                  titik dua tanpa tanda kutip.&nbsp;
                </p>
                <p className={styles.block_233}>
                  Explanation: Kutipan berada di tengah kalimat,&nbsp; jadi
                  gunakan tanda kutip tanpa titik dua.&nbsp;
                </p>
                <p className={styles.block_234}>
                  Explanation: Jangan gunakan koma setelah&nbsp; kata kerja
                  "ngomong" dalam permintaan&nbsp; terjemahan.&nbsp;
                </p>
                <p className={'text'}>
                  <span className={styles.text_5}>
                    Apart from the letters a through z, you should not use any
                    other symbol than: 0-9&nbsp;
                  </span>
                  <span className={styles.text_6}> </span>
                  <span className={styles.text_5}>
                    äâàáāåçčćđéèéëêēïîíìīñóòôöüőōšûùúűūÿ
                  </span>
                  <span className={styles.text_4}>ȳ</span>
                  <span className={styles.text_5}>
                    žÄÂÀÁĀÅÇČĆĐÉÈÉËÊĒÏÎÍÌĪÑÓÒÔÖŌŠÜÛÙÚŪ
                  </span>
                  <span className={styles.text_6}> </span>
                  <span className={styles.text_5}>Ÿ</span>
                  <span className={styles.text_4}>Ȳ</span>
                  <span className={styles.text_5}>
                    ŽŽ²³,?!~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;&nbsp;
                  </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={styles.block_237}>
                  <span className={styles.text_}>
                    For sentence-level spoken punctuation, write out the full
                    word or words between curly&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    brackets. Do not add punctuation symbols after spoken
                    punctuation. Be careful with&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    homonyms. (See exceptions in the next rule.)&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_238}>
                  Correct: Oke {`{titik} {titik} {titik}`}&nbsp;
                </p>
                <p className={styles.block_239}>Incorrect: Oke...&nbsp;</p>
                <p className={styles.block_240}>
                  Correct: Hai {`{koma} `}piye kabare{' '}
                  {`{tandha&nbsp; pitakonan}`} Aku apik-apik wae {`{titik}`}
                  &nbsp;
                </p>
                <p className={styles.block_241}>
                  Incorrect: Hai, piye kabare? Aku apik-apik wae.&nbsp;
                </p>
                <p className={styles.block_242}>
                  Correct: Dheweke ngomong karo aku, {`{kutipan}`}&nbsp; Aja
                  nggawa kucing.
                  {`{kutipan akhir}`}&nbsp;
                </p>
                <p className={styles.block_243}>
                  Incorrect: Dheweke ngomong karo aku, "Aja&nbsp; nggawa
                  kucing."&nbsp;
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    oke titik titik titik ​
                  </span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    hai koma piye kabare tandha&nbsp; pitakonan aku apik-apik
                    wae titik ​
                  </span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    dheweke ngomong karo aku&nbsp; kutipan aja nggawa kucing
                    kutipan akhir ​
                  </span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_}>
                    Don't spell out internal punctuation like hyphens in web
                    pages, email addresses,&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    addresses, phone numbers, or other word-level
                    punctuation.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_248}>
                  Correct: Aku manggon ing apartemen 4-A.&nbsp;
                </p>
                <p className={styles.block_249}>
                  Incorrect: Aku manggon ing apartemen 4&nbsp;{' '}
                  {`{tandha hubung}`} A.&nbsp;
                </p>
                <p className={styles.block_250}>
                  Incorrect: Aku manggon ing apartemen papat&nbsp;
                  {` {tandha hubung}`}
                  A.&nbsp;
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    aku manggon ing apartemen&nbsp; papat tandha hubung a ​
                  </span>
                  <span className={styles.text_17}>"&nbsp;</span>
                </p>
                <p className={styles.block_252}>
                  Correct: www.fake-domain.com&nbsp;
                </p>
                <p className={styles.block_253}>
                  Incorrect: www {`{titik}`} fake {`{tandha hubung}`}&nbsp;
                  domain {`{titik}`}
                  com&nbsp;
                </p>
                <p className={styles.block_254}>
                  Correct: Dheweke artis/model.&nbsp;
                </p>
                <p className={styles.block_255}>
                  Incorrect: Dheweke artis {`{slash}`} model.&nbsp;
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    w w w titik fake tandha hubung&nbsp; domain titik com ​
                  </span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    dheweke artis slash model ​
                  </span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_258}>
                  Explanation: Garis miring dianggap sebagai&nbsp; tanda baca di
                  tingkat kata.&nbsp;
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_}>
                    If a word that can refer to a punctuation mark is spoken in
                    isolation, it should be written&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    out between curly brackets.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>
                  Correct: {`{titik dua}`}&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: {`{underscore}`}&nbsp;
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    sentence as normal.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_261}>
                  Correct: Aku budhal saiki {`{period}`} Pirang jam&nbsp;
                  lelungan saka Bogor nang Jakarta?&nbsp;
                </p>
                <p className={styles.block_262}>
                  Incorrect: Aku budhal saiki {`{period}`} pirang jam&nbsp;
                  lelungan saka Bogor nang Jakarta?&nbsp;
                </p>
                <p className={styles.block_263}>
                  Incorrect: Aku budhal saiki period Pirang jam&nbsp; lelungan
                  saka Bogor nang Jakarta?&nbsp;
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
