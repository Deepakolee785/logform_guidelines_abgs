import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
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
              <p class="block_388">Agreed spelling </p>
              <p class="block_389">
                This section covers spelling conventions for things such as
                proper names, media titles, acronyms, slang words, and more.{' '}
              </p>
              <p class="block_390">Spelling out </p>
              <p class="block_391">
                If a word is spelled out, write it with spaces in between. This
                rule does not apply to acronyms, URLs or email addresses.{' '}
              </p>
              <p class="block_392">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Имарт и м а р т </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">имарт и м а р т </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_393">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The speaker says the name "имарт" aloud so the first letter
                  is capitalized during transcription.{' '}
                </span>
              </p>
              <p class="block_394">
                The spelled out portion should all be lowercase with spaces
                between the letters.{' '}
              </p>
              <p class="block_395">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: -цгаа төгссөн үгс ц г а а </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">-цгаа төгссөн үгс ц г а а </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_396">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : а б в г д е ё ж з и й к л м н о п р с т у х ц ч ш э ю я{' '}
                </span>
              </p>
              <p class="block_397">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">
                  а б в г д е ё ж з и й к л м н о п р с т у х ц ч ш э ю я{' '}
                </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_340">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The speaker spells out the alphabet so it is transcribed in
                  lowercase letters with spaces.{' '}
                </span>
              </p>
              <p class="block_398">
                Transcribe all acronyms and initialisms with capital letters and
                no spaces. Do not include periods between letters.{' '}
              </p>
              <p class="block_399">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: ФИФА </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">фифа </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_400">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Even if the acronym "ФИФА" is pronounced as the word "фифа",
                  it is still transcribed as an acronym with capital letters and
                  no spaces.{' '}
                </span>
              </p>
              <p class="block_401">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: УИХ </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">у и х </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_402">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Since УИХ is an initialism, it is transcribed with capital
                  letters and no spaces.{' '}
                </span>
              </p>
              <p class="block_403">
                If you are unsure whether a word should be written with a
                hyphen, check your language's standard dictionary for the
                official spelling.{' '}
              </p>
              <p class="block_404">
                Capitalize single letters when the speaker is referring to the
                letter itself. Plural letters should be transcribed with an
                apostrophe and an "s".{' '}
              </p>
              <p class="block_405">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Ж-ээр эхэлсэн үгс </span>
              </p>
              <p class="block_406">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: "ж"-ээр эхэлсэн үгс </span>
              </p>
              <p class="block_407">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : банана гэдэг үгэнд хэдэн А байна вэ?{' '}
                </span>
              </p>
              <p class="block_408">Interjections </p>
              <p class="block_409">
                If the speaker uses words representing laughter, crying,
                singing, etc. transcribe them up to three syllables. Do not
                transcribe actual laughter.{' '}
              </p>
              <p class="block_410">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: хахаха </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">ха ха ха ха ха </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_411">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Even if the speaker says "ха" five times, only transcribe
                  three ха's with no spaces.{' '}
                </span>
              </p>
              <p class="block_412">Proper names </p>
              <p class="block_413">
                If a personal name could have multiple spellings, use the
                spelling that has the most Google search hits when you search
                for the name followed by the word "name" (e.g. "Anna name").{' '}
              </p>
              <p class="block_414">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Ринченг дууд </span>
              </p>
              <p class="block_415">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Ренчинг дууд </span>
              </p>
              <p class="block_416">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Searching "Ринчен нэр" yields more results than "Ренчин
                  нэр". Since the speaker wants to call a person, go with
                  transcribing the more popular name.{' '}
                </span>
              </p>
              <p class="block_417">
                If a speaker makes a small mistake in a proper name, capitalize
                it anyway as long as the difference is minimal. Minimal
                differences include adding or dropping articles, possessives,
                and plurals.{' '}
              </p>
              <p class="block_418">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Шар нохой там </span>
              </p>
              <p class="block_419">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Шар нохойн там </span>
              </p>
              <p class="block_420">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">шар нохойн там </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_421">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The actual name of the movie is "Шар нохойн там". Even
                  though speaker said "нохой", it should be transcribed as it
                  was spoken.{' '}
                </span>
              </p>
              <p class="block_422">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Бодлын хулгай </span>
              </p>
              <p class="block_423">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Бодлын хулгайч </span>
              </p>
              <p class="block_420">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">бодлын хулгайч </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_424">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The actual name of the movie is "Бодлын хулгайч". It should
                  be transcribed as spoken, even though the speaker said "Бодлын
                  хулгай".{' '}
                </span>
              </p>
              <p class="block_425">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Үхэж болно, Чингис Хаан </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">үхэж үл болно чингис хаан </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_426">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Үхэж үл болно, Чингис Хаан E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : The actual name of the movie is "Үхэж үл{' '}
                </span>
              </p>
              <p class="block_427">
                болно, Чингис Хаан". It should be transcribed as spoken, even
                though the speaker dropped a "үл".{' '}
              </p>
              <p class="block_428">Brand and product </p>
              <p class="block_429">
                Always use the official spelling and formatting for the
                following types of terms. If you are not sure about the spelling
                or formatting, transcribe them as they are spelled and formatted
                on their Wikipedia page in your country. Note, this only applies
                to terms in your language. For instruction on transcribing
                English terms, refer to the English subsection in Foreign
                Language.{' '}
              </p>
              <p class="block_430">● Technical terms </p>
              <p class="block_431">● Proper names </p>
              <p class="block_432">● Celebrity names </p>
              <p class="block_261">● Holidays </p>
              <p class="block_433">● Brand names </p>
              <p class="block_434">● Product names </p>
              <p class="block_435">Spellings of common Technical Terms </p>
              <p class="block_436">● Pseudotsuga menziesii </p>
              <p class="block_437">● Э. коли </p>
              <p class="block_438">● Wi-Fi </p>
              <p class="block_439">● ДНХ </p>
              <p class="block_440">● QWERTY </p>
              <p class="block_441">● Penicillium chrysogenum </p>
              <p class="block_437">● OpenCL </p>
              <p class="block_442">Spellings of common Proper Names </p>
              <p class="block_443">● Болд </p>
              <p class="block_444">● Жаргал </p>
              <p class="block_256">● Цэцэг </p>
              <p class="block_445">● Бат </p>
              <p class="block_446">● Мөнхзул </p>
              <p class="block_447">● Батбаатар </p>
              <p class="block_433">● Мөнхжаргал </p>
              <p class="block_448">● Билгүүн </p>
              <p class="block_449">● Марал </p>
              <p class="block_450">● Зоригт </p>
              <p class="block_444">● Нандин </p>
              <p class="block_451">Spellings of common Celebrity Names </p>
              <p class="block_452">● Никитон </p>
              <p class="block_453">● Бритни Спирс </p>
              <p class="block_454">● Жэй Зи </p>
              <p class="block_455">● Кэти Перри </p>
              <p class="block_453">● Никки Минаж </p>
              <p class="block_456">● Сай </p>
              <p class="block_457">● Камертон </p>
              <p class="block_458">Spellings of common Holidays </p>
              <p class="block_459">● Цагаан сар </p>
              <p class="block_460">● Шинэ жил </p>
              <p class="block_461">● Валентин </p>
              <p class="block_462">● Наадам </p>
              <p class="block_463">● Мартын найман </p>
              <p class="block_441">● Чингисийн төрсөн өдөр </p>
              <p class="block_464">
                Spellings of common Brand and Product names{' '}
              </p>
              <p class="block_465">● BlackBerry </p>
              <p class="block_466">● Coca-Cola </p>
              <p class="block_437">● DirecTV </p>
              <p class="block_438">● eBay </p>
              <p class="block_467">● IKEA </p>
              <p class="block_468">● IMDb </p>
              <p class="block_449">● iPhone </p>
              <p class="block_469">● LEGOLAND </p>
              <p class="block_470">● edIn </p>
              <p class="block_260">● Toys "R" Us </p>
              <p class="block_450">● Tumblr </p>
              <p class="block_471">● WrestleMania XXX </p>
              <p class="block_472">● WWE '13 </p>
              <p class="block_254">● Xbox 360 </p>
              <p class="block_257">● YouTube </p>
              <p class="block_473">Media title </p>
              <p class="block_474">
                Do not use quotation marks for media titles.{' '}
              </p>
              <p class="block_475">
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">: </span>
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">
                  : Call of Duty: Black Ops 2-ийн дэлгэцийн{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_18">
                  Quotation marks are not used to transcribe{' '}
                </span>
                <span class="text_19">зургууд </span>
              </p>
              <p class="block_475">video game names. </p>
              <p class="block_475">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : "Call of Duty: Black Ops 2-ийн" дэлгэцийн зургууд{' '}
                </span>
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Rihanna-гийн Очир алмаз жүжгийг тоглоорой.{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">
                  : Rihanna-гийн "Очир алмаз" жүжгийг тоглоорой.{' '}
                </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Quotation marks are not used to transcribe song names.{' '}
                </span>
              </p>
              <p class="block_477">
                Transcribe all media titles with their original punctuation. If
                punctuation from the title occurs at the end of a sentence, do
                not transcribe another punctuation mark (a period, question
                mark, or exclamation mark) for end of the sentence.{' '}
              </p>
              <p class="block_478">Multiple spellings </p>
              <p class="block_477">
                Transcribe slang and colloquialisms as they are commonly written
                in your language. Do not change non-standard speech that the
                speaker wouldn't want corrected.{' '}
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тэгүүл тэгье. </span>
              </p>
              <p class="block_475">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Тэгвэл тэгье. </span>
              </p>
              <p class="block_479">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тэгүүл тэгье </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Do not change the non standard "тэгүүл" to the standard
                  "тэгвэл".{' '}
                </span>
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тэд нар явсан. </span>
              </p>
              <p class="block_475">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Тэд явсан. </span>
              </p>
              <p class="block_479">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тэд нар явсан </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_475">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although "тэд нар" does not follow standard grammar, it is
                  transcribed as "тэд нар" and is not changed to the standard
                  equivalent "тэд".{' '}
                </span>
              </p>
              <p class="block_477">
                Use standard spelling for reductions that commonly occur in
                normal running speech.{' '}
              </p>
              <p class="block_476">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Явах юм уу? </span>
              </p>
              <p class="block_475">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Явхиймуу? </span>
              </p>
              <p class="block_479">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">явхиймуу </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_480">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although the speaker said "явхиймуу", this is an informal
                  spelling and should be changed to the standard spelling: "явах
                  юм уу".{' '}
                </span>
              </p>
              <p class="block_481">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Тийм шүү дээ. </span>
              </p>
              <p class="block_482">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">тийшд </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_483">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Тийшд. </span>
              </p>
              <p class="block_484">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although the speaker said "тийшд", this is an informal
                  spelling and should be changed to a more common spelling:
                  "тийм шүү дээ".{' '}
                </span>
              </p>
              <p class="block_485">
                If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech error, speech impairment, etc), transcribe the
                intended word.{' '}
              </p>
              <p class="block_486">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Хамгийн ойр номын сан хаана вэ? </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">хамгийн ойр номын сэн хаана вэ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_487">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Кэти Перри </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">кэти певи </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_488">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Би түүнтэй ярьж байлаа. </span>
                <span class="text_6">E</span>
                <span class="text_7">XAMPLE AUDIO</span>
                <span class="text_6">: " </span>
                <span class="text_17">би түүнтэй ярьж байла </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_489">
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.{' '}
              </p>
              <p class="block_490">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: хэлмэрчүүлэх </span>
              </p>
              <p class="block_491">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: хэлмэрчлэх </span>
              </p>
              <p class="block_492">
                <span class="text_2">E</span>
                <span class="text_3">XAMPLE AUDIO</span>
                <span class="text_2">: " </span>
                <span class="text_10">хэлмэрчүүлэх </span>
                <span class="text_2">" </span>
              </p>
              <p class="block_493">
                <span class="text_2">E</span>
                <span class="text_3">XPLANATION</span>
                <span class="text_2">
                  : Although "хэлмэрчүүлэх" is not a standard word in Mongolian,
                  it has a common infix ("-үү-") attached to a standard verb
                  ("хэлмэрчлэх"), so it should be transcribed as "хэлмэрчүүлэх",
                  and not the standard form "хэлмэрчлэх".{' '}
                </span>
              </p>
              <p class="block_494">
                If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, do a Google
                search for the word. If there is a clear candidate, transcribe
                that word.{' '}
              </p>
              <p class="block_495">
                <span class="text_8">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_8">: Саудын Араб </span>
                <span class="text_11">E</span>
                <span class="text_12">XPLANATION</span>
                <span class="text_11">
                  : Speaker says "Саудын Араб". Transcriber{' '}
                </span>
              </p>
              <p class="block_496">
                guesses the spelling is "судараби" and searches for "судараби"
                on Google but finds the correct spelling "Саудын Араб".
                Transcribe "Саудын Араб".{' '}
              </p>
              <p class="block_497">
                If a word appears to be nonsense and a Google search returns no
                clear results but it is easy to spell and articulated clearly,
                transcribe it anyway.{' '}
              </p>
              <p class="block_498">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: таганброп </span>
              </p>
              <p class="block_499">
                Transcribe onomatopoeia when clearly spoken. Otherwise, use the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.{' '}
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
