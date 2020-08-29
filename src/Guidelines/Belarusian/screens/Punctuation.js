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
            <PageContentHeader currentPage="longform Belarusian" />
            <div className="content text">
              <p class="text_7">Punctuation </p>
              <p class="block_269">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <p class="block_270">Fragments versus sentences </p>
              <p class="block_271">
                Add punctuation where needed, but err on the side of keeping it
                minimal.{' '}
              </p>
              <p class="block_272">
                Full sentences should start with an uppercase letter and end
                with a punctuation mark.{' '}
              </p>
              <p class="block_273">
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a specific question, or
                if it's an example where dropping the subject sounds completely
                natural as a complete sentence.{' '}
              </p>
              <p class="block_274">Correct: Аб кім ты гаворыш? Хлопцу па </p>
              <p class="block_275">суседству. </p>
              <p class="block_276">Explanation: Two speakers. "Хлопцу па </p>
              <p class="block_277">
                суседству." is an answer to a specific question.{' '}
              </p>
              <p class="block_278">
                <span class="text_4">Correct: хлопцу па суседству </span>
                <span class="text_5">
                  Explanation: No context to suggest this is a{' '}
                </span>
              </p>
              <p class="block_279">sentence; treat it as a fragment. </p>
              <p class="block_280">
                <span class="text_4">
                  Correct: Прыйдзеш на вечарыну заўтра?{' '}
                </span>
                <span class="text_5">
                  Explanation: Dropping the subject and main{' '}
                </span>
              </p>
              <p class="block_281">verb here sounds natural as a complete </p>
              <p class="block_282">sentence. Punctuate as sentence. </p>
              <p class="block_283">
                <span class="text_4">Correct: мыццё шчанюкоў ў ванне </span>
                <span class="text_5">
                  Explanation: Sounds like a web search as{' '}
                </span>
              </p>
              <p class="block_284">
                opposed to a dropped subject. Punctuate as{' '}
              </p>
              <p class="block_285">fragment. </p>
              <p class="block_286">
                Interjections, greetings, and farewells said in isolation should
                be considered complete sentences and punctuated as such.{' '}
              </p>
              <p class="block_287">
                <span class="text_4">Correct: Ах. </span>
                <span class="text_5">Explanation: interjection </span>
              </p>
              <p class="block_288">
                <span class="text_4">Correct: Прывітанне. </span>
                <span class="text_5">Explanation: greeting </span>
              </p>
              <p class="block_289">
                <span class="text_4">Correct: Вітаю вас. </span>
                <span class="text_5">
                  Explanation: Entire phrase is being used as an{' '}
                </span>
              </p>
              <p class="block_290">interjection. </p>
              <p class="block_291">
                Capitalize sentence fragments that sound like the beginning of a
                sentence. Add end punctuation to sentence fragments that sound
                like the end of a sentence. For fragments that do not clearly
                sound like the beginning or end of a sentence, leave out
                capitalization and punctuation. Note that sentence fragments may
                be a result of cut-off audio samples.{' '}
              </p>
              <p class="block_292">
                <span class="text_4">
                  Correct: Што думаеш? Гэта не так, калі{' '}
                </span>
                <span class="text_5">
                  Explanation: Sentence-initial fragment ends{' '}
                </span>
              </p>
              <p class="block_293">mid-stream. </p>
              <p class="block_294">Correct: нашмат больш складана. Гэта не </p>
              <p class="block_295">мае ніякага сэнсу. </p>
              <p class="block_296">
                Explanation: Audio was cut off at the beginning.{' '}
              </p>
              <p class="block_297">
                <span class="text_4">
                  Correct: вельмі цяжка, але не хвалюйцеся.{' '}
                </span>
                <span class="text_5">
                  Explanation: Audio was cut off at the beginning.{' '}
                </span>
              </p>
              <p class="block_298">
                Correct: Я іду ў кафэ. Я закажу Колькі каштуе{' '}
              </p>
              <p class="block_299">кава з узбітымі сліўкамі? </p>
              <p class="block_300">
                Explanation: Do not put a period, hyphen, or{' '}
              </p>
              <p class="block_301">
                ellipsis after a fragment even if another{' '}
              </p>
              <p class="block_302">sentence follows. </p>
              <p class="block_303">
                <span class="text_4">
                  Correct: Колькі каштуе Дзе знаходзіцца{' '}
                </span>
                <span class="text_5">
                  Explanation: Both sound like beginnings of{' '}
                </span>
              </p>
              <p class="block_304">sentences. </p>
              <p class="block_305">Correct: Дзе знаходзіцца дзе знаходзіцца </p>
              <p class="block_306">пляж? </p>
              <p class="block_307">Explanation: Repeated beginning of the </p>
              <p class="block_308">sentence. </p>
              <p class="block_309">
                <span class="text_4">
                  Correct: з'язджалі, але потым вырашылі{' '}
                </span>
                <span class="text_5">
                  Explanation: Sounds like the middle of a{' '}
                </span>
              </p>
              <p class="block_310">
                sentence; beginning and end were cut off.{' '}
              </p>
              <p class="block_311">
                A voice action is a query where the user requests a specific
                action that a smartphone can complete. The action requested is
                generally expressed by a trigger (most often a verb describing
                the action to be performed, but it can also be any other part of
                speech denoting a change of state of the device or of an app).
                If a voice action sounds complete, it should be capitalized and
                punctuated as a full sentence. In contrast to a voice action, a
                web search is a query where the user does not request a specific
                action that a smartphone can complete. Web searches are more
                often, but not always, spoken as true fragments.{' '}
              </p>
              <p class="block_312">
                <span class="text_4">Correct: Актываваць рэжым палёта. </span>
                <span class="text_5">
                  Explanation: The voice action is a complete{' '}
                </span>
              </p>
              <p class="block_313">
                sentence. It should thus be capitalized and{' '}
              </p>
              <p class="block_314">punctuated as such. </p>
              <p class="block_315">Correct: Паказаць карту Сан-Францыска. </p>
              <p class="block_316">
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not capitalize or punctuate it as a
                sentence.{' '}
              </p>
              <p class="block_317">Commas </p>
              <p class="block_318">
                Only use commas where required. Err on the side of minimal
                punctuation. Do not rely on intonation.{' '}
              </p>
              <p class="block_319">Correct: Дзе знаходзіцца бліжэйшая </p>
              <p class="block_320">запраўка? </p>
              <p class="block_321">Incorrect: Дзе знаходзіцца, бліжэйшая, </p>
              <p class="block_322">запраўка? </p>
              <p class="block_323">
                Explanation: Even if the speaker uses long{' '}
              </p>
              <p class="block_324">
                pauses in these places, do not use a comma.{' '}
              </p>
              <p class="block_325">
                There are places where commas are allowed or{' '}
              </p>
              <p class="block_326">
                required, but this example contains neither.{' '}
              </p>
              <p class="block_327">
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However: If there is a long pause
                between a discourse word, interjection, or yes/no word and a
                full sentence that follows it, treat that initial word as a
                separate sentence.{' '}
              </p>
              <p class="block_328">Correct: Ну, я думаў, што ў цябе была </p>
              <p class="block_329">кампанія. </p>
              <p class="block_330">
                Explanation: Discourse word. Other examples of{' '}
              </p>
              <p class="block_331">
                discourse words in English include "але", "так",{' '}
              </p>
              <p class="block_332">"на самай справе", "таксама". </p>
              <p class="block_333">
                <span class="text_4">Correct: На жаль, дзетка. </span>
                <span class="text_5">
                  Explanation: Interjection. Other examples of{' '}
                </span>
              </p>
              <p class="block_334">
                interjections include "вау", "эй", "ха-ха", and{' '}
              </p>
              <p class="block_335">others. </p>
              <p class="block_336">
                <span class="text_4">Correct: Так, я гэта раблю. </span>
                <span class="text_5">Explanation: yes/no word </span>
              </p>
              <p class="block_337">
                <span class="text_4">
                  Correct: Вядома, я магу зрабіць гэта.{' '}
                </span>
                <span class="text_5">
                  Explanation: Use a comma when there is no{' '}
                </span>
              </p>
              <p class="block_338">
                pause, or when there is a pause that isn't long.{' '}
              </p>
              <p class="block_339">
                <span class="text_4">
                  Correct: Добра. Гэта вельмі прыемна.{' '}
                </span>
                <span class="text_5">
                  Explanation: substantial pause after "добра"{' '}
                </span>
              </p>
              <p class="block_340">
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".{' '}
              </p>
              <p class="block_341">Correct: Ok Google </p>
              <p class="block_342">
                Correct: Ok Google, малюнкі аліўкавых дрэў{' '}
              </p>
              <p class="block_343">Correct: Ok Google, пакажыце мне </p>
              <p class="block_344">кантактныя дадзеныя Дэна. </p>
              <p class="block_345">
                Correct: Ok Google, калі Дзень Незалежнасці{' '}
              </p>
              <p class="block_346">ў гэтым годзе? </p>
              <p class="block_347">Intonation marks </p>
              <p class="block_348">
                Capitalize and punctuate the following as questions: 1) All
                queries syntactically built as questions, regardless of
                intonation. 2) All queries which sound like they are being used
                as questions, regardless of sentence structure.{' '}
              </p>
              <p class="block_349">
                <span class="text_4">Correct: Ты сур'ёзна? </span>
                <span class="text_5">
                  Explanation: Syntactically built as a question, so{' '}
                </span>
              </p>
              <p class="block_350">punctuate as a question regardless of </p>
              <p class="block_351">intonation. </p>
              <p class="block_352">
                <span class="text_4">Correct: У 3:00 раніцы? </span>
                <span class="text_5">
                  Explanation: Rising intonation suggests it is a{' '}
                </span>
              </p>
              <p class="block_353">
                question, so punctuate as a question regardless{' '}
              </p>
              <p class="block_293">of structure. </p>
              <p class="block_354">
                <span class="text_4">Correct: прагноз надвор'я ў Мінску </span>
                <span class="text_5">
                  Explanation: Query has rising intonation, but is{' '}
                </span>
              </p>
              <p class="block_355">
                most likely a web search rather than a true{' '}
              </p>
              <p class="block_356">question. </p>
              <p class="block_357">
                If a speaker uses clearly exclamatory intonation, use an
                exclamation point. If there is any doubt, err on the side of
                using period.{' '}
              </p>
              <p class="block_358">
                <span class="text_4">Correct: Ура! </span>
                <span class="text_5">
                  Explanation: Speaker sounds enthusiastic.{' '}
                </span>
              </p>
              <p class="block_359">
                <span class="text_4">Correct: Ура. </span>
                <span class="text_5">
                  Explanation: Speaker sounds unenthused.{' '}
                </span>
              </p>
              <p class="block_360">Colon and quotation </p>
              <p class="block_361">
                Use a colon between reported speech verbs and direct quotations.
                Do not put punctuation within quotation marks unless the
                punctuation belongs to the reported speech.{' '}
              </p>
              <p class="block_362">Correct: Мой сябар сказаў: "алігатар </p>
              <p class="block_363">кракадзіл". </p>
              <p class="block_364">
                Explanation: The word "сказаць" is the most{' '}
              </p>
              <p class="block_365">
                common reported speech verb in English, but{' '}
              </p>
              <p class="block_366">Incorrect: Мой сябар сказаў, "алігатар </p>
              <p class="block_367">кракадзіл". </p>
              <p class="block_368">Incorrect: Мой сябар сказаў "алігатар </p>
              <p class="block_367">кракадзіл". </p>
              <p class="block_368">Incorrect: Мой сябар сказаў "алігатар </p>
              <p class="block_369">кракадзіл" </p>
              <p class="block_370">
                other words ("запытацца", "адказаць") can be{' '}
              </p>
              <p class="block_371">used for reported speech. </p>
              <p class="block_372">Correct: Скажыце "гукаперайманне". </p>
              <p class="block_373">Incorrect: Скажыце: "гукаперайманне". </p>
              <p class="block_374">
                Explanation: Omit the colon if the verb is in the{' '}
              </p>
              <p class="block_375">imperative. </p>
              <p class="block_376">
                If the text in quotation marks qualifies as a sentence,
                punctuate as if it were its own utterance. Do not alter its end
                punctuation even if the quote is within a sentence. Do not add
                excess punctuation after end quotation marks.{' '}
              </p>
              <p class="block_377">Correct: Ганна сказала: "Давайце </p>
              <p class="block_378">сустрэнемся ў 03:00." </p>
              <p class="block_379">Incorrect: Ганна сказала: "Давайце </p>
              <p class="block_380">сустрэнемся ў 03:00.". </p>
              <p class="block_381">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_382">
                as a sentence. Do not add excess punctuation.{' '}
              </p>
              <p class="block_383">Correct: Джэйн спытала: "Мы сустракаемся </p>
              <p class="block_384">ў 03:00?" </p>
              <p class="block_385">Incorrect: Джэйн спытала: "Мы </p>
              <p class="block_386">сустракаемся ў 03:00?". </p>
              <p class="block_381">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_382">
                as a sentence. Do not add excess punctuation.{' '}
              </p>
              <p class="block_387">
                Correct: Ці яна сказала: "Сустрэнемся там."{' '}
              </p>
              <p class="block_388">Incorrect: Ці яна сказала: "Сустрэнемся </p>
              <p class="block_389">там."? </p>
              <p class="block_381">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_390">
                as a sentence. Do not add excess punctuation.{' '}
              </p>
              <p class="block_391">Correct: Джош як быццам сказаў: "Я буду </p>
              <p class="block_392">там. Я абяцаю." нават не правяраючы свой </p>
              <p class="block_320">каляндар. </p>
              <p class="block_381">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_393">
                as sentences. Do not alter its end punctuation{' '}
              </p>
              <p class="block_394">
                even though the quote is within a sentence.{' '}
              </p>
              <p class="block_395">
                Use a colon but no quotation marks in quotative voice actions
                when the quote follows the command. Use quotation marks when the
                quote is in the middle of the sentence.{' '}
              </p>
              <p class="block_396">
                Correct: Перавядзіце на французскую мову:{' '}
              </p>
              <p class="block_397">Як ты? </p>
              <p class="block_381">
                Explanation: The quote follows the command,{' '}
              </p>
              <p class="block_398">so use a colon and omit quotation marks. </p>
              <p class="block_399">
                Correct: Перавядзіце "Як цябе клічуць?" на{' '}
              </p>
              <p class="block_400">французскую мову. </p>
              <p class="block_401">
                Explanation: The quote is in the middle of a{' '}
              </p>
              <p class="block_402">
                sentence, so use quotation marks and omit{' '}
              </p>
              <p class="block_403">colon. </p>
              <p class="block_404">Correct: Як сказаць "Я люблю цябе." </p>
              <p class="block_405">па-французску? </p>
              <p class="block_406">Incorrect: Як сказаць: "Я люблю цябе." </p>
              <p class="block_407">па-французску? </p>
              <p class="block_408">Correct: Для example@gmail.com: Гэй, як </p>
              <p class="block_378">прайшоў твой дзень? </p>
              <p class="block_409">Correct: Адправіць імэйл на </p>
              <p class="block_410">example@gmail.com кажучы: Гэй, як </p>
              <p class="block_378">прайшоў твой дзень? </p>
              <p class="block_411">Other symbols </p>
              <p class="block_412">
                Apart from Cyrillic and Latin letters, you should not use any
                other symbol than: 0-9
                äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                !~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;{' '}
              </p>
              <p class="block_413">Spoken punctuation </p>
              <p class="block_159">
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.){' '}
              </p>
              <p class="block_414">Correct: Ён сказаў мне: {`{цытата}`} Ня </p>
              <p class="block_415">прыносьце котку. {`{канец цытаты}`} </p>
              <p class="block_416">Incorrect: Ён сказаў мне: "Ня прыносьце </p>
              <p class="block_417">котку." </p>
              <p class="block_418">
                <span class="text_">Example audio: " </span>
                <span class="text_1">ён сказаў мне цытата ня </span>
              </p>
              <p class="block_419">
                <span class="text_1">прыносьце котку канец цытаты </span>
                <span class="text_">" </span>
              </p>
              <p class="block_420">
                Correct: Добра{` {кропка} {кропка} {кропка}`}{' '}
              </p>
              <p class="block_421">Incorrect: Добра... </p>
              <p class="block_422">
                <span class="text_">Example audio: " </span>
                <span class="text_1">добра кропка кропка кропка </span>
              </p>
              <p class="block_423">" </p>
              <p class="block_424">
                Correct: Прывітанне {`{коска}`} як вы {`{знак`}{' '}
              </p>
              <p class="block_425">
                пытання {`}`} я ў парадку {`{кропка}`}{' '}
              </p>
              <p class="block_426">Incorrect: Прывітанне! Як справы? Я ў </p>
              <p class="block_427">парадку. </p>
              <p class="block_428">
                <span class="text_">Example audio: " </span>
                <span class="text_1">прывітанне клічнік як вы </span>
              </p>
              <p class="block_429">
                <span class="text_1">знак пытання я ў парадку кропка </span>
                <span class="text_">" </span>
              </p>
              <p class="block_430">Correct: {`{смайлік}`} </p>
              <p class="block_431">Incorrect: :-) </p>
              <p class="block_432">Incorrect: смайлік </p>
              <p class="block_433">
                <span class="text_">Example audio: " </span>
                <span class="text_1">смайлік </span>
                <span class="text_">" </span>
              </p>
              <p class="block_434">
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.{' '}
              </p>
              <p class="block_435">Correct: Я жыву ў доме 4A. </p>
              <p class="block_436">
                Incorrect: Я жыву доме 4 {`{працяжнік}`} А.{' '}
              </p>
              <p class="block_437">
                <span class="text_">Example audio: " </span>
                <span class="text_1">я жыву ў доме чатыры a </span>
                <span class="text_">" </span>
              </p>
              <p class="block_438">Correct: www.fake-domain.com </p>
              <p class="block_439">
                Incorrect: www {`{кропка}`} fake {`{злучок}`} domain{' '}
              </p>
              <p class="block_440">{`{кропка}`} cом </p>
              <p class="block_441">Correct: Яна акторка/мадэль. </p>
              <p class="block_442">
                Incorrect: Яна акторка {`{слэш}`} мадэль.{' '}
              </p>
              <p class="block_443">
                <span class="text_">Example audio: " </span>
                <span class="text_1">яна акторка слэш мадэль </span>
                <span class="text_">" </span>
              </p>
              <p class="block_444">
                Explanation: We consider slash to be word-level{' '}
              </p>
              <p class="block_445">punctuation. </p>
              <p class="block_446">
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.{' '}
              </p>
              <p class="block_447">Correct: {`{двукроп'е}`} </p>
              <p class="block_448">Correct: {`{падкрэсліванне}`} </p>
              <p class="block_449">
                Treat spoken punctuation as you would regular symbols, and
                capitalize the following sentence as normal.{' '}
              </p>
              <p class="block_450">
                Correct: Я ад'яжджаю {`{кропка} `}Як доўга
              </p>
              <p class="block_397">ехаць? </p>
              <p class="block_451">
                Incorrect: Я ад'яжджаю {`{кропка}`} як доўга
              </p>
              <p class="block_417">ехаць? </p>
              <p class="block_452">
                <span class="text_">Example audio: " </span>
                <span class="text_1">я ад'яжджаю кропка як </span>
              </p>
              <p class="block_453">
                <span class="text_1">доўга ехаць </span>
                <span class="text_">" </span>
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
