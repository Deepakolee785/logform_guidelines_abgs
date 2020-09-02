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
            <PageContentHeader currentPage="longform Mandarin" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_280}>
                  A complete sentence denotes a simple or complex sentence which
                  is semantically completed (e.g., 'subject' + 'predicate' or
                  'predicate' alone). See the following examples for more.
                </p>
                <p className={styles.block_199}>Correct: 我们需要胡萝卜。</p>
                <p className={styles.block_281}>
                  Explanation: Subject + Predicate (Verb) + Object (主+谓+宾)
                </p>
                <p className={styles.block_239}>Correct: 我们很快乐。</p>
                <p className={styles.block_282}>
                  Explanation: Subject + Predicate (Adjective) (主+谓)
                </p>
                <p className={styles.block_283}>Correct: 看电视。</p>
                <p className={styles.block_284}>
                  Explanation: Predicate (Verb) + Object (谓+宾)
                </p>
                <p className={styles.block_273}>Correct: 谢谢。</p>
                <p className={styles.block_285}>
                  Explanation: Greetings (寒暄类语句)
                </p>
                <p className={styles.block_273}>Correct: 吃了。</p>
                <p className={styles.block_286}>
                  Explanation: Verb + Temporal Aspect (动词+时态词)
                </p>
                <p className={styles.block_273}>Correct: 走吧。</p>
                <p className={styles.block_287}>
                  Explanation: Verb + Interjection (动词+叹词)
                </p>
                <p className={styles.block_288}>Correct: 吃</p>
                <p className={styles.block_289}>
                  Explanation: Incomplete sentence doesn't need a period
                  (语义不完整的例子则不需加句 号或问号).
                </p>
                <p className={styles.block_290}>
                  Use a period to separate obvious sentences (i.e. when
                  dictating several sentences).
                </p>
                <p className={styles.block_239}>Correct: 买一份报纸。</p>
                <p className={styles.block_197}>
                  Correct: 如果台风不来,我们就出国旅行。
                </p>
                <p className={styles.block_291}>
                  Correct: 今天很高兴与你见面。下次再见。我会跟你保持联系的。
                </p>
                <p className={styles.block_292}>
                  Correct: He works from home today.
                </p>
                <p className={styles.block_293}>
                  Correct: It was good to see you today. See you next time. I'll
                  keep in touch.
                </p>
                <p className={styles.block_294}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_295}>
                  Correct: 你在说谁?隔壁的先生。
                </p>
                <p className={styles.block_55}>Explanation: two speakers</p>
                <p className={styles.block_210}>Correct: 隔壁的先生</p>
                <p className={styles.block_296}>
                  Explanation: No context to suggest this is a sentence; treat
                  it as a fragment.
                </p>
                <p className={styles.block_210}>Correct: 明天来吗?</p>
                <p className={styles.block_210}>Correct: 四川的天气</p>
                <p className={styles.block_297}>
                  Explanation: This is asking for information, but the most
                  likely interpretation is as a sentence fragment on its own.
                </p>
                <p className={styles.block_54}>
                  Correct: Who are you talking about? The guy next door.
                </p>
                <p className={styles.block_55}>Explanation: two speakers</p>
                <p className={styles.block_298}>Correct: the guy next door</p>
                <p className={styles.block_296}>
                  Explanation: No context to suggest this is a sentence; treat
                  it as a fragment.
                </p>
                <p className={styles.block_139}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_299}>Correct: 你怎样认为的?这不像</p>
                <p className={styles.block_188}>
                  Explanation: Begins as complete sentence and ends mid-stream.
                </p>
                <p className={styles.block_210}>Correct: 然后我们就</p>
                <p className={styles.block_45}>
                  Explanation: Person is 'building up' the sentence, they
                  probably started it in another waveform, and will likely
                  continue it in yet another waveform.
                </p>
                <p className={styles.block_300}>
                  Correct: a lot harder. It doesn't make any sense.
                </p>
                <p className={styles.block_301}>
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className={styles.block_302}>
                  Correct: really difficult, so don't get discouraged.
                </p>
                <p className={styles.block_303}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_304}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_283}>Correct: 狗狗照片</p>
                <p className={styles.block_211}>Incorrect: 狗狗照片。</p>
                <p className={styles.block_305}>
                  Explanation: search for images
                </p>
                <p className={styles.block_210}>Correct: 邻家的男生</p>
                <p className={styles.block_306}>
                  Explanation: Sounds like a complete utterance, but doesn't
                  contain a verb, so don't capitalize or punctuate.
                </p>
                <p className={styles.block_307}>Correct: Beatles</p>
                <p className={styles.block_308}>
                  Explanation: search for the band Beatles; note this is
                  capitalized as it is the band's name.
                </p>
                <p className={styles.block_302}>
                  Correct: Incredibles Monsters, Inc. WALL-E studio
                </p>
                <p className={styles.block_309}>
                  Incorrect: Incredibles Monsters, Inc. WALL-E studio.
                </p>
                <p className={styles.block_310}>
                  Incorrect: Incredibles, Monsters, Inc., WALL-E, studio.
                </p>
                <p className={styles.block_311}>
                  Incorrect: Incredibles. Monsters, Inc. WALL-E. studio
                </p>
                <p className={styles.block_312}>
                  Use fullwidth forms for utterances that are entirely in
                  Mandarin or code-mixing scripts (i.e. Mandarin and English).
                  Use halfwidth forms for utterances that are entirely in
                  English.
                </p>
                <p className={styles.block_313}>
                  Correct: 可不可以给我你的 WeChat?
                </p>
                <p className={styles.block_314}>
                  Incorrect: 可不可以給我你的 WeChat?
                </p>
                <p className={styles.block_315}>
                  Correct: 祝你 happy birthday。
                </p>
                <p className={styles.block_316}>
                  Incorrect: 祝你 happy birthday.
                </p>
                <p className={styles.block_317}>
                  A voice action is a query where the user requests a specific
                  action that a smartphone can complete. The action requested is
                  generally expressed by a trigger (most often a verb describing
                  the action to be performed, but it can also be any other part
                  of speech denoting a change of state of the device or of an
                  app). If a voice action sounds complete, it should be
                  capitalized and punctuated as a full sentence. In contrast to
                  a voice action, a web search is a query where the user does
                  not request a specific action that a smartphone can complete.
                  Web searches are more often, but not always, spoken as true
                  fragments.
                </p>
                <p className={styles.block_295}>
                  Correct: 告诉我中山公园怎么走。
                </p>
                <p className={styles.block_208}>Correct: 给张伟打电话。</p>
                <p className={styles.block_210}>Correct: 打开百度。</p>
                <p className={styles.block_228}>Correct: 半小时之后提醒我。</p>
                <p className={styles.block_318}>
                  Correct: 今天下午 2 点钟提醒我开视频会议。
                </p>
                <p className={styles.block_319}>
                  Correct: 打电话 0991-123-1234。
                </p>
                <p className={styles.block_210}>Correct: 我在哪里?</p>
                <p className={styles.block_320}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
                <p className={styles.block_321}>
                  For English: Full sentences should start with an uppercase
                  letter and end with a punctuation mark.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_228}>Correct: 最近的加油站在哪?</p>
                <p className={styles.block_323}>
                  Incorrect: 最近的,加油站,在哪?
                </p>
                <p className={styles.block_77}>
                  Explanation: Even if the speaker uses long pauses in these
                  places, do not use a comma. There are places where commas are
                  allowed or required, but this example contains neither.
                </p>
                <p className={styles.block_324}>
                  Use a comma to separate parts of a sentence.
                </p>
                <p className={styles.block_325}>
                  Correct:
                  等一下有键盘出现,它就可以输入,你只要讲完,它就出现在上面。
                </p>
                <p className={styles.block_326}>
                  Incorrect:
                  等一下有键盘出现它就可以输入你只要讲完它就出现在上面。
                </p>
                <p className={styles.block_327}>
                  Correct: 床前看月光,疑是地上霜,举头望山月,低头思故乡。
                </p>
                <p className={styles.block_328}>Use commas in lists.</p>
                <p className={styles.block_246}>
                  Correct: 我们需要胡萝卜、豌豆、豆腐、米饭。
                </p>
                <p className={styles.block_198}>
                  Incorrect: 我们需要胡萝卜,豌豆,豆腐,米饭。
                </p>
                <p className={styles.block_329}>
                  Explanation: Use a Chinese comma instead of an English one in
                  lists.
                </p>
                <p className={styles.block_330}>
                  Correct: We need carrots, peas, tofu, and rice.
                </p>
                <p className={styles.block_331}>
                  If the greeting occurrs at the beginning of a sentence or
                  fragment, place the comma after the greeting.
                </p>
                <p className={styles.block_239}>Correct: 晚上好,老陈</p>
                <p className={styles.block_211}>Incorrect: 晚上好老陈</p>
                <p className={styles.block_295}>
                  Correct: 早上好,你今天要去哪?
                </p>
                <p className={styles.block_316}>
                  Incorrect: 早上好你今天要去哪?
                </p>
                <p className={styles.block_332}>
                  Sentence-initial and sentence-final addressees should be
                  separated by a comma.
                </p>
                <p className={styles.block_228}>Correct: 豪哥,打电话给我。</p>
                <p className={styles.block_228}>Correct: 你最近好吗,张伟?</p>
                <p className={styles.block_333}>
                  Correct: 刘姐,我小王,我要跟你谈谈那个保险条款。
                </p>
                <p className={styles.block_334}>
                  Correct: Mark, hi, this is Jane.
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built
                </p>
                <p className={styles.block_337}>
                  as questions, regardless of intonation. 2) All queries which
                  sound like they are being used as questions, regardless of
                  sentence structure.
                </p>
                <p className={styles.block_299}>Correct: 你可以带晚饭回家吗?</p>
                <p className={styles.block_338}>
                  Incorrect: 你可以带晚饭回家吗?
                </p>
                <p className={styles.block_150}>
                  Explanation: Use fullwidth question mark instead of a
                  halfwidth English one.
                </p>
                <p className={styles.block_299}>Correct: 你不要?你真的不要?</p>
                <p className={styles.block_339}>
                  Explanation: Utterance uses rising intonation.
                </p>
                <p className={styles.block_340}>Correct: 真的假的?</p>
                <p className={styles.block_339}>
                  Explanation: Utterance uses rising intonation.
                </p>
                <p className={styles.block_341}>Correct: At 3:00 a.m.?</p>
                <p className={styles.block_339}>
                  Explanation: Utterance uses rising intonation.
                </p>
                <p className={styles.block_342}>
                  Correct: And Kate is coming, too?
                </p>
                <p className={styles.block_339}>
                  Explanation: Utterance uses rising intonation.
                </p>
                <p className={styles.block_343}>Correct: Are you serious?</p>
                <p className={styles.block_249}>
                  Explanation: Intonation sounds more like a statement than a
                  question.
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a colon in quotative voice actions to separate the command
                  from the quotation.
                </p>
                <p className={styles.block_345}>
                  Correct: 建立日历:和妈妈吃饭、看戏。
                </p>
                <p className={styles.block_346}>
                  Incorrect: 建立日历,和妈妈吃饭、看戏。
                </p>
                <p className={styles.block_347}>
                  Correct: Create calendar event: dinner with Mom.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className={styles.block_319}>
                  Correct: 我昨天吃了 McDonald's。
                </p>
                <p className={styles.block_349}>
                  Incorrect: 我昨天吃了 McDonalds。
                </p>
                <p className={styles.block_350}>
                  Correct: 我要订 Domino's Pizza。
                </p>
                <p className={styles.block_351}>
                  Incorrect: 我要訂 Dominos Pizza。
                </p>
                <p className={styles.block_352}>Correct: He ain't lazy.</p>
                <p className={styles.block_353}>Incorrect: He aint lazy.</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_356}>Correct: 你好吗{`{问号}`}</p>
                <p className={styles.block_222}>Incorrect: 你好吗?</p>
                <p className={styles.block_211}>Incorrect: 你好吗问号</p>
                <p className={styles.block_357}>Incorrect: 你好吗问号?</p>
                <p className={styles.block_338}>
                  Example audio: " 你好吗问号 "
                </p>
                <p className={styles.block_358}>
                  Correct: 因为我睡过头了{`{逗号}`}所以没去上课{`{句号}`}
                </p>
                <p className={styles.block_198}>
                  Incorrect: 因为我睡过头了,所以没去上课。
                </p>
                <p className={styles.block_359}>
                  Incorrect: 因为我睡过头了逗号所以没去上课句号
                </p>
                <p className={styles.block_360}>
                  Incorrect: 因为我睡过头了逗号,所以没去上课句号。
                </p>
                <p className={styles.block_361}>
                  Example audio: " 因为我睡过头了逗号所以没去上课句号 "
                </p>
                <p className={styles.block_338}>
                  Correct: 这真是太棒了{`{感叹号}`}
                </p>
                <p className={styles.block_209}>Incorrect: 这真是太棒了!</p>
                <p className={styles.block_229}>
                  Incorrect: 这真是太棒了感叹号
                </p>
                <p className={styles.block_316}>
                  Incorrect: 这真是太棒了感叹号!
                </p>
                <p className={styles.block_362}>
                  Example audio: " 这真是太棒了感叹号 "
                </p>
                <p className={styles.block_363}>
                  Correct: How are you {`{question mark}`}
                </p>
                <p className={styles.block_364}>Incorrect: How are you?</p>
                <p className={styles.block_93}>
                  Incorrect: How are you question mark
                </p>
                <p className={styles.block_108}>
                  Incorrect: How are you question mark?
                </p>
                <p className={styles.block_365}>
                  Example audio: " how are you question mark "
                </p>
                <p className={styles.block_366}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_367}>Correct: 我住的单位是 4-A。</p>
                <p className={styles.block_368}>
                  Example audio: " 我住的单位是四横杠 a "
                </p>
                <p className={styles.block_369}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_370}>Correct: {`{冒号}`}</p>
                <p className={styles.block_371}>Incorrect: :</p>
                <p className={styles.block_372}>Incorrect: 冒号</p>
                <p className={styles.block_373}>Example audio: " 冒号 "</p>
                <p className={styles.block_370}>Correct: {`{斜杠}`}</p>
                <p className={styles.block_374}>Incorrect: /</p>
                <p className={styles.block_194}>Incorrect: 斜杠</p>
                <p className={styles.block_373}>Example audio: " 斜杠 "</p>
                <p className={styles.block_370}>Correct: {`{底线}`}</p>
                <p className={styles.block_375}>Incorrect: _</p>
                <p className={styles.block_194}>Incorrect: 底线</p>
                <p className={styles.block_373}>Example audio: " 底线 "</p>
                <p className={styles.block_370}>Correct: {`{横杠}`}</p>
                <p className={styles.block_371}>Incorrect: &mdash;</p>
                <p className={styles.block_372}>Incorrect: 横杠</p>
                <p className={styles.block_373}>Example audio: " 横杠 "</p>
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
