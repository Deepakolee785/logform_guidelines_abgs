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
            <PageContentHeader currentPage="longform Armenian" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation </p>

              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <div id="fragment-versus-sentences">
                <p className={'heading'}>Fragments versus sentences </p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.{' '}
                </p>
                <p className={'text'}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.{' '}
                </p>
                <p className={styles.block_184}>
                  Correct: Ու՞մ մասին եք խոսում։Դռան մոտ{' '}
                </p>
                <p className={styles.block_185}>կանգնած տղայի։ </p>
                <p className={styles.block_186}>
                  Explanation: Երկխոսություն: «Դռան մոտ{' '}
                </p>
                <p className={styles.block_187}>
                  կանգնած տղայի»՝ որոշակի հարցի պատրասխանն է։
                </p>
                <p className={styles.block_188}>
                  <span className={styles.text_8}>
                    Correct: Դռան մոտ կանգնած տղայի։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Քանի որ համատեքստը{' '}
                  </span>
                </p>
                <p className={styles.block_189}>
                  բացակայում է, սա համարել հատված։{' '}
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_8}>
                    Correct: Վաղը գալի՞ս ես երեկույթին։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Հայերեն քերականությունում{' '}
                  </span>
                </p>
                <p className={styles.block_191}>
                  բայական կառույցը ինքնին բացակայումէ,{' '}
                </p>
                <p className={styles.block_192}>
                  այդ պատճառով այստեղ միակ սղումը{' '}
                </p>
                <p className={styles.block_193}>անձնական դերանվան սղումն է։ </p>
                <p className={styles.block_194}>
                  <span className={styles.text_8}>
                    Correct: շներին լողացնելիս{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Քանի որ համատեքստը{' '}
                  </span>
                </p>
                <p className={styles.block_189}>
                  բացակայում է, սա համարել հատված։{' '}
                </p>
                <p className={'text'}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.{' '}
                </p>
                <p className={styles.block_196}>
                  <span className={styles.text_8}>Correct: Գրո՛ղը տանի։ </span>
                  <span className={styles.text_9}>
                    Explanation: Բացականչություն։{' '}
                  </span>
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_8}>Correct: Ողջու՛յն։ </span>
                  <span className={styles.text_9}>Explanation: Ողջունել։ </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_8}>
                    Correct: Բարեւներ իմ լավագույն ընկերոջը։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Նախադասությունն{' '}
                  </span>
                </p>
                <p className={styles.block_199}>ամբողջությամբ համարել </p>
                <p className={styles.block_200}>բացականչություն։ </p>
                <p className={'text'}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.{' '}
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_8}>
                    Correct: Ի՞նչ ես կարծում։ Այդպես էլ չէ{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Նախադասությունը կեսից{' '}
                  </span>
                </p>
                <p className={styles.block_203}>ավարտվում է։ </p>
                <p className={styles.block_204}>
                  <span className={styles.text_8}>
                    Correct: շատ ավելի բարդ։ Իմաստ չունի։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Նախադասությունը կեսից է{' '}
                  </span>
                </p>
                <p className={styles.block_205}>սկսվում։ </p>
                <p className={styles.block_206}>
                  Correct: իսկապես դժվար, այնպես որ մի՛{' '}
                </p>
                <p className={styles.block_207}>հուսահատվիր։ </p>
                <p className={styles.block_208}>
                  Explanation: Ձայնագրության սկիզբը{' '}
                </p>
                <p className={styles.block_209}>ընդհատված է։ </p>
                <p className={styles.block_210}>
                  <span className={styles.text_8}>
                    Correct: ինձ մոտ, միասին դուրս գանք։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Ձայնագրության սկիզբը{' '}
                  </span>
                </p>
                <p className={styles.block_211}>ընդհատված է։ </p>
                <p className={styles.block_212}>
                  Correct: Սրճարան եմ գնում։ Ուզում եմ{' '}
                </p>
                <p className={styles.block_213}>Կապուչինոն ի՞նչ արժե։ </p>
                <p className={styles.block_214}>
                  Explanation: Հատվածից հետո չդնել ոչ մի{' '}
                </p>
                <p className={styles.block_215}>
                  կետադրական նշան, եթե նույնիսկ ուրիշ{' '}
                </p>
                <p className={styles.block_216}>նախադասություն է սկսվում։ </p>
                <p className={styles.block_217}>
                  <span className={styles.text_8}>
                    Correct: Ի՞նչ արժե Որտե՞ղ է{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Երկու դեպքում էլ{' '}
                  </span>
                </p>
                <p className={styles.block_218}>նախադասության սկիզբ է։ </p>
                <p className={styles.block_219}>
                  <span className={styles.text_8}>
                    Correct: Լողափը Լողափը որտե՞ղ է։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Նախադասության սկիզբը{' '}
                  </span>
                </p>
                <p className={styles.block_220}>կրկնվում է։ </p>
                <p className={styles.block_221}>
                  <span className={styles.text_8}>
                    Correct: Որտե՞ղ է որտե՞ղ է լողափը։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Նախադասության սկիզբը{' '}
                  </span>
                </p>
                <p className={styles.block_220}>կրկնվում է։ </p>
                <p className={styles.block_222}>
                  <span className={styles.text_8}>
                    Correct: գնում էինք, բայց որոշեցինք{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Նախադասության մեջտեղն է,{' '}
                  </span>
                </p>
                <p className={styles.block_223}>
                  սկիզբն ու վերջը բացակայում են։{' '}
                </p>
                <p className={'text'}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.{' '}
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas </p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.{' '}
                </p>
                <p className={styles.block_227}>Correct: Որտե՞ղ է ամենամոտ </p>
                <p className={styles.block_228}>գազալցակայանը։ </p>
                <p className={styles.block_229}>
                  Incorrect: Որտե՞ղ է, ամենամոտ, գազալցակայանը։
                </p>
                <p className={styles.block_231}>
                  Explanation: Թեեւ խոսողը երկար դադարներ է տալիս, ստորակետներ
                  երբ անհրաժեշտ է ստորակետ դնել, բայց ոչ չդնել։ Կան դեպքեր այս
                  օրինակը։
                </p>

                <p className={'text'}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.{' '}
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_8}>
                    Correct: Դե լավ, կարծես թե մենակ չես։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Եղանակավորող բառ է։ Ինչպես{' '}
                  </span>
                </p>
                <p className={styles.block_237}>
                  օրինակ վերջապես, ի վերջո, վերջիվերջո,{' '}
                </p>
                <p className={styles.block_238}>բնավ, անկասկած եւ այլն։ </p>
                <p className={styles.block_239}>
                  <span className={styles.text_8}>
                    Correct: Կներես, սիրելի՛ս։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Կոչականից առաջ, հետո, կամ{' '}
                  </span>
                </p>
                <p className={styles.block_240}>
                  երկու կողմերից դնել ստորակետ։{' '}
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_8}>
                    Correct: Այո, խոսում եմ։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Այո&ndash;ից կամ ոչ&ndash;ից հետո դնել{' '}
                  </span>
                </p>
                <p className={styles.block_242}>ստորակետ։ </p>
                <p className={styles.block_243}>
                  <span className={styles.text_8}>
                    Correct: Իհարկե, կարող եմ անել։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Իհարկե&ndash;ից հետո ստորակետ{' '}
                  </span>
                </p>
                <p className={styles.block_244}>դնել։ </p>
                <p className={styles.block_245}>
                  <span className={styles.text_8}>
                    Correct: Իհարկե, կարող եմ անել։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: դադար իհարկե-ից հետո։{' '}
                  </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_8}>
                    Correct: Լավ։ Իսկապես գեղեցիկ է։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Լավ&ndash;ից հետո ստորակետ դնել։{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".{' '}
                </p>
                <p className={styles.block_248}>Correct: Ok Google </p>
                <p className={styles.block_249}>
                  Correct: Ok Google, զեյթունի ծառերի{' '}
                </p>
                <p className={styles.block_250}>նկարներ </p>
                <p className={styles.block_251}>
                  Correct: Ok Google, գտի՛ր Դավիթի{' '}
                </p>
                <p className={styles.block_252}>տվյալները։ </p>
                <p className={styles.block_253}>
                  Correct: Ok Google, ե՞րբ է Հիշատակի օրը{' '}
                </p>
                <p className={styles.block_254}>այս տարի։ </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks </p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.{' '}
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_8}>
                    Correct: Լու՞րջ ես խոսում։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Շարահյուսորեն ձեւակերպված է{' '}
                  </span>
                </p>
                <p className={styles.block_258}>
                  որպես հարց: Կետադրել որպես հարց՝{' '}
                </p>
                <p className={styles.block_259}>անկախ հնչերանգից։ </p>
                <p className={styles.block_260}>
                  <span className={styles.text_8}>
                    Correct: Առավոտյան 3:00-ի՞ն։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Հնչերանգը հուշում է, որ{' '}
                  </span>
                </p>
                <p className={styles.block_261}>
                  հարցական նախադասություն է։ Կետադրել{' '}
                </p>
                <p className={styles.block_262}>համապատասխանորեն։ </p>
                <p className={styles.block_263}>
                  <span className={styles.text_8}>
                    Correct: եղանակը Գորիսում{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Հարցումը աճող հնչերանգ ունի,{' '}
                  </span>
                </p>
                <p className={styles.block_264}>
                  բայց ավելի շատ վեբ որոնման է նման, քան{' '}
                </p>
                <p className={styles.block_265}>հարցի։ </p>
                <p className={styles.block_266}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.{' '}
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_8}>Correct: Այո՜։ </span>
                  <span className={styles.text_9}>
                    Explanation: Խոսակիցը խանդավառություն է{' '}
                  </span>
                </p>
                <p className={styles.block_268}>արտահայտում։ </p>
                <p className={styles.block_269}>
                  <span className={styles.text_8}>Correct: Այո։ </span>
                  <span className={styles.text_9}>
                    Explanation: Խոսակիցը ոգեւորված չէ։{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation </p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.{' '}
                </p>
                <p className={styles.block_272}>
                  Correct: Ընկերս ասաց. «Մի կարաս ոսկի»։{' '}
                </p>
                <p className={styles.block_273}>
                  Incorrect: Ընկերս ասաց «Մի կարաս ոսկի»։{' '}
                </p>
                <p className={'text'}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.{' '}
                </p>
                <p className={styles.block_275}>
                  Correct: Աննը ասաց. «ժամը երեքին{' '}
                </p>
                <p className={styles.block_276}>հանդիպենք»։ </p>
                <p className={styles.block_277}>
                  Incorrect: Աննը ասաց. «ժամը երեքին{' '}
                </p>
                <p className={styles.block_278}>հանդիպենք։»։ </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols </p>
                <p className={'text'}>
                  <span className={'text'}>
                    Apart from the English letters a through z and Armenian
                    letters Ա through Ֆ, you should not use any other symbol
                    than: 0-9
                    äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ
                    23,?!~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.; «»
                  </span>
                  <span className={styles.text_13}>.</span>
                  <span className={styles.text_14}>։ ՜ ՞ ՙ ՚ ՝ ՟ ֊ ՛ </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation </p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.){' '}
                </p>
                <p className={styles.block_283}>
                  Correct: Օքեյ {`{կետ} {կետ} {կետ}`}{' '}
                </p>
                <p className={styles.block_284}>Incorrect: Oքեյ... </p>
                <p className={styles.block_285}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>օքեյ կետ կետ կետ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_286}>
                  Correct: Բարեւ {`{ստորակետ}`} ո՞նց ես{' '}
                </p>
                <p className={styles.block_287}>
                  {`{հարցական նշան}`} Ես լավ եմ {`{վերջակետ}`}{' '}
                </p>
                <p className={styles.block_288}>
                  Incorrect: Բարեւ, ո՞նց ես: Ես լավ եմ։{' '}
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    բարեւ ստորակետ ոնց ես հարցական նշան ես լավ եմ վերջակետ "
                  </span>
                </p>

                <p className={styles.block_291}>
                  Correct: Նա ասաց ինձ {`{միջակետ} {գծիկ}`}{' '}
                </p>
                <p className={styles.block_292}>
                  Կատվին չբերե՛ս {`{վերջակետ}`}{' '}
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_14}>Incorrect: Նա ասաց ինձ</span>
                  <span className={styles.text_13}>. </span>
                  <span className={styles.text_14}>_Կատվին չբերե՛ս։ </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    Նա ասաց ինձ կետ գիծ կատվին չբերե՛ս շեշտ վերջակետ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_295}>Correct: {`{սմայլիկ}`} </p>
                <p className={styles.block_296}>Incorrect: :-) </p>
                <p className={styles.block_297}>Incorrect: սմայլիկ </p>
                <p className={styles.block_298}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>սմայլիկ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={'text'}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.{' '}
                </p>
                <p className={styles.block_300}>
                  Correct: Ես ապրում եմ 7/3 շենքում։{' '}
                </p>
                <p className={styles.block_301}>
                  Incorrect: Ես ապրում եմ 7 {`{սլեշ}`} 3 շենքում։{' '}
                </p>
                <p className={styles.block_302}>
                  Incorrect: Ես ապրում եմ յոթ {`{գիծ}`} երեք{' '}
                </p>
                <p className={styles.block_303}>շենքում։ </p>
                <p className={styles.block_304}>
                  <span className={styles.text_4}>
                    Example audio: " Ես ապրում եմ յոթ գիծ երեք շենքում վերջակետ
                    "
                  </span>
                </p>

                <p className={styles.block_306}>
                  <span className={styles.text_15}>
                    Correct: www.fake-domain.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    դաբլու դաբլյու դաբլյու կետ ֆեյք դեֆիս դոմեյն կետ քոմ "
                  </span>
                </p>

                <p className={styles.block_308}>
                  Incorrect: դաբլու դաբլյու դաբլյու {`{կետ}`}{' '}
                </p>
                <p className={styles.block_309}>
                  ֆեյք {`{դեֆիս}`} դոմեյն {`{կետ}`} քոմ{' '}
                </p>
                <p className={styles.block_310}>
                  Correct: Նա պարուհի, դերասանուհի է։{' '}
                </p>
                <p className={styles.block_311}>
                  Incorrect: Նա պարուհի {`{ստորակետ} `}
                </p>
                <p className={styles.block_312}>դերասանուհի է։ </p>
                <p className={styles.block_313}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    Նա պարուհի ստորակետ դերասանուհի է{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={'text'}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.{' '}
                </p>
                <p className={styles.block_315}>Correct:{` {երկու կետ}`} </p>
                <p className={styles.block_316}>Correct: {`{ընդգծիկ}`} </p>
                <p className={'text'}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.{' '}
                </p>
                <p className={styles.block_318}>
                  Correct: Ես գնում եմ {`{դադար}`} Քանի՞ ժամ կտեւի։{' '}
                </p>
                <p className={styles.block_319}>
                  Incorrect: Ես գնում եմ {`{դադար}`} քանի՞ ժամ կտեւի։{' '}
                </p>
                <p className={styles.block_320}>
                  Incorrect: Ես գնում եմ դադար Քանի՞ ժամ կտեւի։{' '}
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
