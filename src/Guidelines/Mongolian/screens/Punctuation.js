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
    'fragment-vrsus-sentences',
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
            <PageContentHeader currentPage="longform Mongolian" />
            <div className="content text">
              <p class="block_810">Punctuation </p>
              <p class="block_811">
                Follow the punctuation regulations of your language. Additional
                conventions are outlined in this section.{' '}
              </p>
              <p class="block_812">Fragments versus sentences </p>
              <p class="block_813">
                Answers to questions and sentences with dropped subjects should
                be transcribed as complete sentences.{' '}
              </p>
              <p class="block_814">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Хэний тухай ярьж байгаа юм? Хажуу айлын залуу.{' '}
                </span>
              </p>
              <p class="block_815">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Even though "хажуу айлын залуу" is not a complete sentence,
                  it should be transcribed as one since it is a natural response
                  to the question.{' '}
                </span>
              </p>
              <p class="block_816">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Маргааш үдэшлэгт ирэх үү? </span>
              </p>
              <p class="block_817">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: маргааш үдэшлэгт ирэх үү </span>
              </p>
              <p class="block_671">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although the main verb and subject have been left out, it is
                  still transcribed as a complete sentence, since this is a
                  natural way of phrasing the question.{' '}
                </span>
              </p>
              <p class="block_818">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: хажуу айлын залуу </span>
              </p>
              <p class="block_795">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хажуу айлын залуу. </span>
              </p>
              <p class="block_819">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "хажуу айлын залуу" is not a response to any question and is
                  not a complete sentence, so it is not treated as a complete
                  sentence.{' '}
                </span>
              </p>
              <p class="block_820">
                Interjections, greetings, and farewells said in isolation should
                include ending punctuation.{' '}
              </p>
              <p class="block_821">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Аймаар. </span>
              </p>
              <p class="block_822">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: аймаар </span>
              </p>
              <p class="block_823">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Interjections such as "аймаар" can be used alone as a
                  sentence with proper punctuation.{' '}
                </span>
              </p>
              <p class="block_824">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Сайн уу. </span>
              </p>
              <p class="block_602">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: сайн уу </span>
              </p>
              <p class="block_825">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Greetings and farewells such as "сайн уу" can also be used
                  alone as a sentence with proper punctuation.{' '}
                </span>
              </p>
              <p class="block_826">
                Below are some examples of common interjections.{' '}
              </p>
              <p class="block_827">● өө </p>
              <p class="block_828">● Баяр хүргэе </p>
              <p class="block_829">● тхх </p>
              <p class="block_830">● хаха </p>
              <p class="block_831">● хөөе </p>
              <p class="block_832">● ёооё </p>
              <p class="block_833">● ёох </p>
              <p class="block_834">● ээ бурхан минь </p>
              <p class="block_831">● хөөх </p>
              <p class="block_835">
                Do not capitalize or add ending punctuation to web search
                queries. Web search queries are spoken versions of what a person
                might type into a Google search bar. Note: Web search queries
                are different from voice action requests because they do not
                include a command directed to a device.{' '}
              </p>
              <p class="block_836">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: өндөгтэй хуурга хэрхэн хийх вэ </span>
              </p>
              <p class="block_837">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Өндөгтэй хуурга хэрхэн хийх вэ </span>
              </p>
              <p class="block_265">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This phrase is a web search, so don't capitalize the
                  beginning letter "ө" or add any punctuation at the end.{' '}
                </span>
              </p>
              <p class="block_838">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: хамгийн ойр зах руу очих зам </span>
              </p>
              <p class="block_839">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хамгийн ойр зах руу очих зам </span>
              </p>
              <p class="block_265">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This phrase is a web search, so don't capitalize the
                  beginning letter "х" or add any punctuation at the end.{' '}
                </span>
              </p>
              <p class="block_840">
                Add ending punctuation to phrases that sound like the end of a
                sentence. Capitalize phrases that sound like the beginning of a
                sentence. If they do not clearly sound like the end of a
                sentence, leave out ending punctuation. Remember that some
                sentences may sound incomplete because the audio has been cut
                off.{' '}
              </p>
              <p class="block_841">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : үнэхээр хэцүү, тэгэхээр битгий шантраарай{' '}
                </span>
              </p>
              <p class="block_842">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Үнэхээр хэцүү, тэгэхээр битгий шантраарай{' '}
                </span>
              </p>
              <p class="block_843">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This sounds like the end of a sentence. Add punctuation at
                  the end but do not capitalize the first word.{' '}
                </span>
              </p>
              <p class="block_844">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Ямар үнэтэй Эрэг хаана вэ? </span>
              </p>
              <p class="block_845">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ямар үнэтэй- Эрэг хаана вэ? </span>
              </p>
              <p class="block_846">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ямар үнэтэй... Эрэг хаана вэ? </span>
              </p>
              <p class="block_847">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ямар үнэтэй? Эрэг хаана вэ? </span>
              </p>
              <p class="block_848">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The first phrase sounds like the beginning of a sentence, so
                  the first letter should be capitalized. However, it does not
                  have an end so it should not be transcribed with punctuation
                  at the end.{' '}
                </span>
              </p>
              <p class="block_849">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: явж байснаа дараа нь шийдээд </span>
              </p>
              <p class="block_850">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Явж байснаа дараа нь шийдээд </span>
              </p>
              <p class="block_851">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: явж байснаа дараа нь шийдээд. </span>
              </p>
              <p class="block_671">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This sounds like an incomplete sentence that is missing a
                  beginning and end. No need to capitalize or add punctuation.{' '}
                </span>
              </p>
              <p class="block_852">
                A voice action is a request or command spoken to a device and
                includes a command verb. Transcribe all voice actions as
                complete sentences.{' '}
              </p>
              <p class="block_853">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : "Хүүе, өнөөдөр ямар өдөр байв?" гэж example@gmail.com руу
                  и-мэйл бичээрэй.{' '}
                </span>
              </p>
              <p class="block_854">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Хүүе, өнөөдөр ямар өдөр байв гэж example@gmail.com руу
                  и-мэйл бичээрэй.{' '}
                </span>
              </p>
              <p class="block_855">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  хүүе өнөөдөр ямар өдөр байв гэж жишээ эт gmail цэг ком руу
                  и-мэйл бичээрэй{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_856">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The voice action is a complete sentence. It should thus be
                  capitalized and punctuated as such.{' '}
                </span>
              </p>
              <p class="block_857">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Чана масала хэрхэн хийхийг хай. </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : Since this example includes a command{' '}
                </span>
              </p>
              <p class="block_858">
                directed to a device (хай), it is a voice action. Include ending
                punctuation and is capitalized.{' '}
              </p>
              <p class="block_859">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Хамгийн ойрын зах руу хүрэх замыг зааж өгөөч.{' '}
                </span>
              </p>
              <p class="block_524">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since this example includes a command directed to a device,
                  it is a voice action. Include ending punctuation and
                  capitalize the beginning of the sentence.{' '}
                </span>
              </p>
              <p class="block_860">Commas </p>
              <p class="block_861">
                Use commas only when necessary. If you are unsure whether to use
                a comma, leave it out.{' '}
              </p>
              <p class="block_862">Do not transcribe pauses with commas. </p>
              <p class="block_863">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Хамгийн ойрхон шатахуун түгээгүүр хаана вэ?{' '}
                </span>
              </p>
              <p class="block_864">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Хамгийн ойрхон.... шатахуун түгээгүүр хаана вэ?{' '}
                </span>
              </p>
              <p class="block_865">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Хамгийн ойрхон, шатахуун түгээгүүр хаана вэ?{' '}
                </span>
              </p>
              <p class="block_866">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  хамгийн ойрхон [түр зогсов] шатахуун түгээгүүр хаана вэ{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_867">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Even if the speaker uses long pauses, do not use a comma.
                  There are places where commas are allowed or required, but
                  this example contains neither.{' '}
                </span>
              </p>
              <p class="block_868">
                Put a comma after common sentence openers such as prepositional
                phrases, adverbials, and introductory clauses.{' '}
              </p>
              <p class="block_869">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Одоо таны хэлснээр, бид зарим хангамжаа авах хэрэгтэй.{' '}
                </span>
              </p>
              <p class="block_870">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Одоо таны хэлснээр бид зарим хангамжаа авах хэрэгтэй.{' '}
                </span>
              </p>
              <p class="block_236">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Одоо таны хэлснээр" is an introductory clause and should be
                  capitalized as well as punctuated with a comma.{' '}
                </span>
              </p>
              <p class="block_871">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Сонирхолтой нь, хоёр үдэшлэг хоёулаа нэг өдөр болно.{' '}
                </span>
              </p>
              <p class="block_872">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Сонирхолтой нь хоёр үдэшлэг хоёулаа нэг өдөр болно.{' '}
                </span>
              </p>
              <p class="block_873">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Сонирхолтой нь" is an adverbial and should be separated
                  from the rest of the sentence with a comma.{' '}
                </span>
              </p>
              <p class="block_874">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Нөгөө талаар, тоть гайхалтай тэжээвэр амьтан болдог.{' '}
                </span>
              </p>
              <p class="block_875">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Нөгөө талаар тоть гайхалтай тэжээвэр амьтан болдог.{' '}
                </span>
              </p>
              <p class="block_876">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Нөгөө талаар" is a prepositional phrase that should be
                  separated from the rest of the sentence with a comma.{' '}
                </span>
              </p>
              <p class="block_877">
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However, if there is a long pause
                after a discourse word, interjection, or yes/no word, transcribe
                it as a complete sentence.{' '}
              </p>
              <p class="block_878">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Тэгэхээр, би чамайг компанитай гэж бодсон.{' '}
                </span>
              </p>
              <p class="block_879">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Тэгэхээр би чамайг компанитай гэж бодсон.{' '}
                </span>
              </p>
              <p class="block_880">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Тэгэхээр" is a discourse word, so it should appear with a
                  comma even if there is no obvious pause after the discourse
                  word.{' '}
                </span>
              </p>
              <p class="block_881">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Хөөх, үнэхээр гайхалтай. </span>
              </p>
              <p class="block_882">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хөөх үнэхээр гайхалтай. </span>
              </p>
              <p class="block_883">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Хөөх" is an interjection so it should have a comma after
                  it, before the rest of the sentence.{' '}
                </span>
              </p>
              <p class="block_884">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тийм ээ, би хийж чадна. </span>
              </p>
              <p class="block_885">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Тийм ээ би хийж чадна. </span>
              </p>
              <p class="block_886">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тийм ээ би хийж чадна </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_887">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тийм ээ. Би хийж чадна. </span>
              </p>
              <p class="block_888">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Тийм ээ, би хийж чадна. </span>
              </p>
              <p class="block_608">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тийм ээ [түр зогсов] би хийж чадна </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_889">Use commas in lists. </p>
              <p class="block_890">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Ухаалаг, хөгжилтэй, өхөөрдөм жаал анхны алхмаа хийлээ.{' '}
                </span>
              </p>
              <p class="block_891">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Ухаалаг хөгжилтэй өхөөрдөм жаал анхны алхмаа хийлээ.{' '}
                </span>
              </p>
              <p class="block_892">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Ухаалаг, хөгжилтэй, өхөөрдөм, жаал анхны алхмаа хийлээ.{' '}
                </span>
              </p>
              <p class="block_893">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The sentence contains a list of adjectives "ухаалаг"
                  "хөгжилтэй" "өхөөрдөм" which should be separated with commas
                  but don't use a comma after the last list item.{' '}
                </span>
              </p>
              <p class="block_894">
                Use commas in sign-offs, such as those at the end of a message.
                Do not use end punctuation.{' '}
              </p>
              <p class="block_895">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Хүндэтгэсэн, Оуэн </span>
              </p>
              <p class="block_896">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хүндэтгэсэн, Оуэн. </span>
              </p>
              <p class="block_514">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Хүндэтгэсэн" is a sign off, so there should be a comma
                  after it. Do not transcribe a period at the end.{' '}
                </span>
              </p>
              <p class="block_897">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Мэндчилсэн, Эд </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : "Мэндчилсэн" is another sign off, so there{' '}
                </span>
              </p>
              <p class="block_898">
                should be a comma after it. Do not transcribe a period at the
                end.{' '}
              </p>
              <p class="block_899">
                Do not use commas in sentences that contain only a greeting and
                an addressee. If a greeting occurs at the beginning of a
                sentence or fragment, place a comma after the greeting. If the
                greeting includes an addressee, place the comma after the
                addressee.{' '}
              </p>
              <p class="block_900">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Сайн уу Дэн. </span>
              </p>
              <p class="block_901">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Сайн уу, Дэн. </span>
              </p>
              <p class="block_902">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : This example only consists of a greeting "Сайн уу" and an
                  addressee "Дэн." Therefore, it should not be transcribed with
                  a comma.{' '}
                </span>
              </p>
              <p class="block_903">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Сайн уу, би Глориа байна. </span>
              </p>
              <p class="block_904">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Сайн уу би Глориа байна </span>
              </p>
              <p class="block_905">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "би Глориа байна" is a sentence, there should be a
                  comma separating it from the greeting.{' '}
                </span>
              </p>
              <p class="block_906">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Сайн уу Дэн, би Глориа байна. </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : In this case, "Сайн уу Дэн" is the greeting,{' '}
                </span>
              </p>
              <p class="block_907">
                so there is a comma after "Дэн" since "би Глориа байна" is a
                sentence.{' '}
              </p>
              <p class="block_908">
                Except in greetings, sentence-initial and sentence-final
                addressees should be separated by a comma.{' '}
              </p>
              <p class="block_909">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Мэри, эргээд залгаарай. </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : "Мэри" is a sentence initial addressee so{' '}
                </span>
              </p>
              <p class="block_910">
                transcribe a comma after it to separate it from the sentence.{' '}
              </p>
              <p class="block_911">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Сонин юу байна, Жон? </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : "Жон" is a sentence final addressee so{' '}
                </span>
              </p>
              <p class="block_912">
                transcribe a comma before it to separate it from the sentence.{' '}
              </p>
              <p class="block_913">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Марк, сайн уу, би Жэйн байна. </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : There is only a brief pause between{' '}
                </span>
              </p>
              <p class="block_912">
                "Марк", "сайн уу", and "би Жэйн байна", so they are separated by
                commas and not periods.{' '}
              </p>
              <p class="block_914">
                The phrase "Ok Google" by itself is transcribed without a comma
                or end punctuation. When the phrase appears before longer
                sentences, place a comma after "Google".{' '}
              </p>
              <p class="block_267">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Ok Google </span>
              </p>
              <p class="block_915">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ok, Google </span>
              </p>
              <p class="block_277">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ok Google. </span>
              </p>
              <p class="block_524">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Ok Google" was spoken in isolation, so do not transcribe a
                  comma or period.{' '}
                </span>
              </p>
              <p class="block_916">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">
                  : Ok Google, чидун жимсний модны зураг{' '}
                </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : "Ok Google" appears before the noun{' '}
                </span>
              </p>
              <p class="block_917">
                phrase "чидун жимсний модны зураг", so transcribe a comma after
                "Ok Google".{' '}
              </p>
              <p class="block_918">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Ok Google, Диний холбоо барих мэдээллийг харуулаарай.{' '}
                </span>
              </p>
              <p class="block_919">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Ok Google" appears before the command "Диний холбоо барих
                  мэдээллийг харуулаарай." so transcribe a comma after "Ok
                  Google".{' '}
                </span>
              </p>
              <p class="block_920">Question marks </p>
              <p class="block_921">
                Transcribe a sentence as a question if it is structured
                grammatically as a sentence, or if it sounds like a question
                because of its intonation.{' '}
              </p>
              <p class="block_922">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Үнэхээр үү? </span>
              </p>
              <p class="block_923">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Үнэхээр үү. </span>
              </p>
              <p class="block_924">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">үнэхээр үү </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_925">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Even if the intonation does not sound like a the intonation
                  of a question, this sentence is structured as a question.{' '}
                </span>
              </p>
              <p class="block_926">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: 3:00 цагт? </span>
              </p>
              <p class="block_299">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: 3:00 цагт. </span>
              </p>
              <p class="block_326">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">гурван цагт [асуултын интонтаар] </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_927">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since the sentence has question intonation, it is
                  transcribed as a question, even though it is not structured
                  like a typical sentence.{' '}
                </span>
              </p>
              <p class="block_928">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Хулуу, жимс, эсвэл ногоо? </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : Even though this sentence just includes{' '}
                </span>
              </p>
              <p class="block_929">
                topics, this is a common form of asking a question of preference
                so it should be capitalized and punctuated properly (with commas
                separating the topics and a question mark at the end).{' '}
              </p>
              <p class="block_930">Colon and quotation </p>
              <p class="block_931">
                If the text in quotation marks is a complete sentence,
                transcribe it as a complete sentence. Do not change the
                punctuation of the quotation, and do not add punctuation
                immediately after the quotation marks.{' '}
              </p>
              <p class="block_475">
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">: </span>
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">
                  : Жон цаглавраа ч харалгүйгээр "Би тэнд{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_18">
                  Even though Жон's statement appears in{' '}
                </span>
                <span class="text_19">очно. Амлаж байна." гэсэн. </span>
              </p>
              <p class="block_475">
                the middle of a larger sentence, final punctuation needs to be
                transcribed within the quotation.{' '}
              </p>
              <p class="block_477">
                Use a colon instead of quotation marks in voice actions when the
                quote follows the command.{' '}
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Дараах өгүүлбэрийг франц руу орчуулна уу: Сайн байна уу?{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Дараах өгүүлбэрийг франц руу орчуулна уу: "Сайн байна уу?"{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Сайн байна уу" follows the command "орчуулна уу", so a
                  colon is used before the phrase without any quotation marks.{' '}
                </span>
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Дараах өгүүлбэрийг японоор юу гэж хэлэх вэ: Би кофе уумаар
                  байна.{' '}
                </span>
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : example@gmail.com руу ингэж бичээрэй: Өнөөдөр ямар өдөр байв
                  даа?{' '}
                </span>
              </p>
              <p class="block_477">
                Use quotation marks when the quote is in the middle of the
                sentence.{' '}
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Францаар "Би чамд хайртай." гэхийг юу гэдэг вэ?{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The quote is in the middle of a sentence, so use quotation
                  marks.{' '}
                </span>
              </p>
              <p class="block_477">
                Leave text after colons lowercase unless it is a complete
                sentence.{' '}
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Маргааш 15:30-д цаг аваарай: эмчид үзүүлэх.{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "эмчид үзүүлэх" can't stand alone as a sentence, it is
                  not capitalized after the colon.{' '}
                </span>
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Ким руу ингэж бич: Дээвэрчид лхагва гараг хүртэл очихгүй.{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "Дээвэрчид лхагва гараг хүртэл очихгүй" can stand
                  alone as a sentence, it is capitalized after the colon.{' '}
                </span>
              </p>
              <p class="block_477">
                When speakers make a request for single words to be translated
                into another language, don't punctuate or capitalize the words,
                even if you'd consider the words as sentences in other
                situations.{' '}
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Францаар "би" гэхийг орчуулаарай. </span>
              </p>
              <p class="block_932">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Францаар "Би" гэхийг орчуулаарай. </span>
              </p>
              <p class="block_933">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Испани руу орчуулна уу: яв. </span>
              </p>
              <p class="block_934">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Испани руу орчуулна уу: Яв. </span>
              </p>
              <p class="block_935">
                Do not use quotation marks when the speaker is using a word to
                say something about the word itself.{' '}
              </p>
              <p class="block_936">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тусгал гэдгийг тодорхойл. </span>
              </p>
              <p class="block_937">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: "Тусгал" гэдгийг тодорхойл. </span>
              </p>
              <p class="block_938">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Do not use quotation marks for defining words.{' '}
                </span>
              </p>
              <p class="block_939">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тэр хулуу гэдэг үг л хэлсэн. </span>
              </p>
              <p class="block_940">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Тэр "хулуу" гэдэг үг л хэлсэн. </span>
              </p>
              <p class="block_873">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Do not use quotation marks for referring to words.{' '}
                </span>
              </p>
              <p class="block_941">Other symbols </p>
              <p class="block_942">
                Apart from the English letters a through z, you should not use
                any other symbol than: 0-9
                äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?!~^\'\_°:.
                ()""{}[]√/@#$€£+=%*&amp;-.;{' '}
              </p>
              <p class="block_943">
                When two opposing teams are mentioned, include a hyphen between
                their names.{' '}
              </p>
              <p class="block_944">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Улаанбаатар Сити-Эрчим багийн тоглолтод явах уу?{' '}
                </span>
              </p>
              <p class="block_945">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "Улаанбаатар Сити" and "Эрчим" are both sports teams,
                  transcribe the teams with a hyphen in between.{' '}
                </span>
              </p>
              <p class="block_946">
                Include a hyphen between locations in flight itineraries.{' '}
              </p>
              <p class="block_947">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Ром-Лондонгийн нислэг </span>
              </p>
              <p class="block_948">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ром Лондонгийн нислэг </span>
              </p>
              <p class="block_949">Spoken punctuation </p>
              <p class="block_950">
                If a speaker says the name of a punctuation mark, write out the
                full word or words between curly brackets. Do not add
                punctuation symbols after spoken punctuation.{' '}
              </p>
              <p class="block_951">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Хэр байна даа {`{асуултын тэмдэг}`}{' '}
                </span>
              </p>
              <p class="block_952">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хэр байна даа? </span>
              </p>
              <p class="block_953">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хэр байна даа асуултын тэмдэг. </span>
              </p>
              <p class="block_954">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Хэр байна даа асуултын тэмдэг? </span>
              </p>
              <p class="block_955">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">хэр байна даа асуултын тэмдэг </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_956">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Oкэй {`{цэг} {цэг} {цэг}`} </span>
              </p>
              <p class="block_602">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Окэй.... </span>
              </p>
              <p class="block_957">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">окэй цэг цэг цэг </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_958">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Би 4-А байшинд амьдардаг. </span>
              </p>
              <p class="block_959">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Би 4 {`{зураас}`} А байшинд амьдардаг.{' '}
                </span>
              </p>
              <p class="block_960">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Би дөрөв {`{зураас}`} А байшинд амьдардаг.{' '}
                </span>
              </p>
              <p class="block_961">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  би дөрөв зураас а байшинд амьдардаг{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_962">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : 4-А байшинд is an address with established internal
                  punctuation (4-A), so use the punctuation symbols here, don't
                  type out "зураас" between curly brackets.{' '}
                </span>
              </p>
              <p class="block_963">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: {`{инээсэн дүрс}`} </span>
              </p>
              <p class="block_964">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: :-) </span>
              </p>
              <p class="block_965">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: инээсэн дүрс </span>
              </p>
              <p class="block_966">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">инээсэн дүрс </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_967">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : "Инээсэн дүрс" is transcribed in curly brackets because the
                  speaker used its name. Don't type out the actual emoticon but
                  type out the words between curly brackets.{' '}
                </span>
              </p>
              <p class="block_968">
                However, don't spell out punctuation if it contradicts the
                established transcription conventions of a certain phrase like
                web pages, email addresses, addresses, phone numbers, etc.{' '}
              </p>
              <p class="block_557">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Манай хаяг Чингисийн өргөн чөлөө-15.{' '}
                </span>
              </p>
              <p class="block_969">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Манай хаяг Чингисийн өргөн чөлөө {`{зураас}`} 15.{' '}
                </span>
              </p>
              <p class="block_970">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  манай хаяг чингисийн өргөн чөлөө зураас арван тав{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_971">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although the speaker said "зураас", addresses have an
                  established transcription convention that require the use of
                  the symbol. So use a - instead of spelling it out as{' '}
                  {`{зураас}`}.{' '}
                </span>
              </p>
              <p class="block_561">
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE </span>
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: www.google.com </span>
              </p>
              <p class="block_972">
                <span class="text_3">AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">w w w цэг google цэг com </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_973">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">:{` w w w {цэг} google {цэг} com`} </span>
              </p>
              <p class="block_746">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although the speaker said "цэг", URLs have an established
                  transcription convention that require the use of the symbols.
                  So use a . instead of spelling it out as {`{цэг}`}.{' '}
                </span>
              </p>
              <p class="block_974">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тэр жүжигчин/загвар өмсөгч. </span>
              </p>
              <p class="block_879">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Тэр жүжигчин {`{ташуу зураас}`} загвар өмсөгч.{' '}
                </span>
              </p>
              <p class="block_326">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  тэр жүжигчин ташуу зураас загвар өмсөгч{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_520">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since "ташуу зураас" is considered to be a word-level
                  punctuation, the slash symbol, "/" is used and it is not
                  spelled out.{' '}
                </span>
              </p>
              <p class="block_975">
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.{' '}
              </p>
              <p class="block_976">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: {`{тодорхойлох цэг}`} </span>
              </p>
              <p class="block_977">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: : </span>
              </p>
              <p class="block_742">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тодорхойлох цэг </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_978">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The actual spelling "тодорхойлох цэг" is transcribed in
                  curly brackets and not as the symbol ":" because it is spoken
                  in isolation.{' '}
                </span>
              </p>
              <p class="block_979">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: {`{доогуур зураас}`} </span>
              </p>
              <p class="block_980">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: _ </span>
              </p>
              <p class="block_981">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">доогуур зураас </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_982">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The actual spelling "доогуур зураас" is transcribed in curly
                  brackets and not as the symbol "_" because it is spoken in
                  isolation.{' '}
                </span>
              </p>
              <p class="block_983">
                Treat spoken punctuation the same as regular punctuation, and
                capitalize the following sentence as normal.{' '}
              </p>
              <p class="block_984">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Би одоо явлаа {`{цэг}`} Хэр удаан явах вэ?{' '}
                </span>
              </p>
              <p class="block_985">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Би одоо явлаа {`{цэг}`} хэр удаан явах вэ?{' '}
                </span>
              </p>
              <p class="block_986">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Би одоо явлаа цэг хэр удаан явах вэ?{' '}
                </span>
              </p>
              <p class="block_987">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Би одоо явлаа. Хэр удаан явах вэ? </span>
              </p>
              <p class="block_988">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  би одоо явлаа цэг хэр удаан явах вэ{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_989">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Speaker says "цэг" aloud, so type "цэг" between curly
                  brackets. Because {`{цэг}`} serves the same function as the
                  period symbol, the "Х" in the sentence after {`{цэг}`} is
                  capitalized.{' '}
                </span>
              </p>
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
