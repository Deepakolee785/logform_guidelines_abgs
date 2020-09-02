import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../../Marathi/Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
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
              <p class="block_190">Transcription quality</p>
              <p class="block_191">Typo</p>
              <p class="block_192">
                A typo results in the unintentional creation of a non-word.
              </p>
              <p class="block_193">Correct: 卑怯</p>
              <p class="block_194">Incorrect: 卑却</p>
              <p class="block_193">Correct: 玷辱</p>
              <p class="block_194">Incorrect: 沾辱</p>
              <p class="block_193">Correct: 通缉</p>
              <p class="block_194">Incorrect: 通辑</p>
              <p class="block_195">Correct: 肖像</p>
              <p class="block_194">Incorrect: 肖象</p>
              <p class="block_196">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p class="block_197">Correct: 提供各品牌平板电脑与周边配件。</p>
              <p class="block_198">Incorrect: 提供各品牌平版电脑与周边配件。</p>
              <p class="block_199">Correct: 抱歉,再等一下。</p>
              <p class="block_200">Incorrect: 抱歉,在等一下。</p>
              <p class="block_201">Correct: Check me on Facebook.</p>
              <p class="block_74">Incorrect: Check me on Facebok.</p>
              <p class="block_202">
                For English: Use the proper capitalization for standard words
                that require it.
              </p>
              <p class="block_203">Correct: She is Australian.</p>
              <p class="block_204">Incorrect: She is australian.</p>
              <p class="block_205">Correct: That is a tabby cat.</p>
              <p class="block_158">Incorrect: That is a Tabby cat.</p>
              <p class="block_28">Correct: Navigate home.</p>
              <p class="block_55">Incorrect: Navigate Home.</p>
              <p class="block_206">Context error</p>
              <p class="block_207">
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <p class="block_208">Correct: 必须努力学习。</p>
              <p class="block_209">Incorrect: 必需努力学习。</p>
              <p class="block_199">Correct: 這是生活必需品。</p>
              <p class="block_209">Incorrect: 這是生活必须品</p>
              <p class="block_210">Correct: 决不同意。</p>
              <p class="block_211">Incorrect: 绝不同意。</p>
              <p class="block_210">Correct: 绝无此事。</p>
              <p class="block_211">Incorrect: 决无此事。</p>
              <p class="block_212">Correct: I ate apples.</p>
              <p class="block_213">Incorrect: I eight apples.</p>
              <p class="block_214">Correct: your favorite movie</p>
              <p class="block_215">Incorrect: you're favorite movie</p>
              <p class="block_216">Correct: You're my best friend.</p>
              <p class="block_217">Incorrect: You re my best friend.</p>
              <p class="block_218">Correct: Don't judge a book by its cover.</p>
              <p class="block_219">
                Incorrect: Don't judge a book by it's cover.
              </p>
              <p class="block_220">
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p class="block_221">Correct: 一支军队</p>
              <p class="block_222">Incorrect: 一枝军队</p>
              <p class="block_221">Correct: 一枝钢笔</p>
              <p class="block_223">Explanation: 一支钢笔</p>
              <p class="block_224">Correct: 珊珠湖 or 山豬湖 or [skip]</p>
              <p class="block_225">
                Explanation: homophones for geographic names
              </p>
              <p class="block_74">Correct: The cupboard was bare.</p>
              <p class="block_226">Incorrect: The cupboard was bear.</p>
              <p class="block_227">
                Do not correct speaker's grammar if they intentionally say
                something, even if what they say does not follow the standard
                grammatical rules of the transcription language.
              </p>
              <p class="block_228">Correct: 也我有中国人朋友。</p>
              <p class="block_229">Incorrect: 我也有中国人朋友。</p>
              <p class="block_230">Example audio: " 也我有中国人朋友 "</p>
              <p class="block_231">
                <span class="text_2">Correct: 他们是</span>
                <span class="text_3">都</span>
                <span class="text_2">我的同学。 </span>
              </p>
              <p class="block_229">Incorrect: 他们都是我的同学。</p>
              <p class="block_232">
                <span class="text_2">Example audio: " 他们是</span>
                <span class="text_3">都</span>
                <span class="text_2">我的同学 " </span>
              </p>
              <p class="block_233">Correct: She loves pizza.</p>
              <p class="block_234">Incorrect: She love pizza.</p>
              <p class="block_118">Example audio: " she loves pizza "</p>
              <p class="block_235">Correct: She love pizza.</p>
              <p class="block_55">Incorrect: She loves pizza.</p>
              <p class="block_236">Example audio: " she love pizza "</p>
              <p class="block_237">Added or missing words</p>
              <p class="block_238">
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth.
              </p>
              <p class="block_239">Correct: 我要到山东。</p>
              <p class="block_209">Incorrect: 我要到山东省。</p>
              <p class="block_240">Example audio: " 我要到山东 "</p>
              <p class="block_210">Correct: 这好好玩。</p>
              <p class="block_241">Incorrect: 这个好好玩。</p>
              <p class="block_242">Example audio: " 这好好玩 "</p>
              <p class="block_243">
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <p class="block_244">Correct: 我今天明天要去看电影。</p>
              <p class="block_245">
                Explanation: Speaker clearly corrected himself after "今天".
              </p>
              <p class="block_246">Correct: 我要看八点,讲错了,九点的连续剧。</p>
              <p class="block_247">
                Explanation: Speaker clearly corrected himself by saying
                "讲错了".
              </p>
              <p class="block_226">Correct: YouTube YouTube YouTube</p>
              <p class="block_248">
                Correct: How many raspberries blueberries are there?
              </p>
              <p class="block_249">
                Explanation: Speaker clearly corrected themselves after
                "raspberries".
              </p>
              <p class="block_250">
                A false start occurs only when the speaker says part of a word
                and then stops. A false start does not happen if the speaker
                re-directs their speech mid sentence. False starts should be
                marked with a dash “-” wherever the false start is happening
              </p>
              <p class="block_43">
                Correct: I need to get a new tele- telephone
              </p>
              <p class="block_251">
                Correct: The driver got out of the driver got into the car.
              </p>
              <p class="block_252">
                Correct: I really don't think Hey that's a good idea, let's do
                that!
              </p>
              <p class="block_253">Substitution</p>
              <p class="block_254">
                A substitution error occurs when another standard word is
                transcribed instead of what was meant by the speaker. If what
                the speaker said falls into another category (Context Error,
                Proper Name, Media Title, etc.), see the relevant section.
              </p>
              <p class="block_208">Correct: 我要去搭火车。</p>
              <p class="block_209">Incorrect: 我要去搭货车。</p>
              <p class="block_255">Example audio: " 我要去搭火车 "</p>
              <p class="block_256">Correct: Take me to Pizza Hut.</p>
              <p class="block_257">Incorrect: Take me to Domino's.</p>
              <p class="block_258">Example audio: " take me to pizza hut "</p>
              <p class="block_114">Spacing</p>
              <p class="block_259">
                Do not add spaces in most cases. If not sure, err on the side of
                no space.
              </p>
              <p class="block_260">Correct: 我叫 MT。</p>
              <p class="block_211">Incorrect: 我叫 M T。</p>
              <p class="block_261">Example audio: " 我叫 m t "</p>
              <p class="block_262">Correct: 钱柜 KTV</p>
              <p class="block_263">Incorrect: 钱柜 K T V</p>
              <p class="block_229">Example audio: " 钱柜 k t v "</p>
              <p class="block_264">Correct: FC2 视频</p>
              <p class="block_265">Incorrect: FC 2 视频</p>
              <p class="block_266">Incorrect: FC2 视频</p>
              <p class="block_229">Example audio: " f c 二视频 "</p>
              <p class="block_267">Correct: 5kg</p>
              <p class="block_67">Incorrect: 5 kg</p>
              <p class="block_268">Incorrect: 5 k g</p>
              <p class="block_199">Example audio: " 五 k g "</p>
              <p class="block_269">
                Do not add spaces even if there is an audible and obvious pause.
              </p>
              <p class="block_221">Correct: 情非得已</p>
              <p class="block_211">Incorrect: 情 非 得 已</p>
              <p class="block_270">
                Example audio: " 情 [pause] 非 [pause] 得 [pause] 已 "
              </p>
              <p class="block_271">
                Explanation: Speaker says so by lengthening every syllable or
                speaking very slowly.
              </p>
              <p class="block_137">
                For most types of punctuation, do not put a space between the
                preceding word and the punctuation.
              </p>
              <p class="block_221">Correct: 你来不?</p>
              <p class="block_272">Incorrect: 你来不 ?</p>
              <p class="block_273">Correct: 闭嘴。</p>
              <p class="block_264">Incorrect: 闭嘴 。</p>
              <p class="block_228">Correct: 你好,我是黃先生。</p>
              <p class="block_274">Incorrect: 你好 ,我是黃先生。</p>
              <p class="block_257">Correct: Hello, this is Dr. Smith.</p>
              <p class="block_275">Incorrect: Hello , this is Dr . Smith .</p>
              <p class="block_276">
                For English: Use only one space between words and sentences.
              </p>
              <p class="block_237">Correct: images of dogs</p>
              <p class="block_277">Incorrect: image of _dogs</p>
              <p class="block_217">Correct: I think so. Let's just try.</p>
              <p class="block_75">Incorrect: I thinkso. Let's just try.</p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
