import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Burmese" />
            <div className="content text">
              <p class="text_12">Difficult utterances </p>
              <p class="block_811">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.{' '}
              </p>
              <p class="block_812">Skipping a prompt </p>
              <p class="block_813">
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.{' '}
              </p>
              <p class="block_814">
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.{' '}
              </p>
              <p class="block_815">● No Audio: The audio doesn't load. </p>
              <p class="block_816">
                ● No Sound: The waveform indicates there is audio but I can't
                hear anything.{' '}
              </p>
              <p class="block_817">
                ● Other Locale: All of the speech is in a different language.{' '}
              </p>
              <p class="block_818">
                ● Silent Audio: The entire utterance is silent{' '}
              </p>
              <p class="block_819">
                ● Noisy Audio: The entire utterance is too noisy.{' '}
              </p>
              <p class="block_820">● Other: Other reason (Please explain). </p>
              <p class="block_821">
                For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.{' '}
              </p>
              <p class="block_822">Hesitations and truncations </p>
              <p class="block_823">
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.{' '}
              </p>
              <p class="block_824">
                <span class="text_18">Correct: </span>
                <span class="text_19">အ လ မ ခ က န </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">အ အ လ မ ခ က န </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_825">
                <span class="text_18">Correct: </span>
                <span class="text_19">သ သ ၊ မလ ခ န </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">သ </span>
                <span class="text_30">- </span>
                <span class="text_20">သ သ မလ ခ န </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_826">
                Complete words that have been truncated only if a very small
                portion of the word is missing (one syllable or less in a
                multisyllable word) and it is obvious what the word should be.
                In cases of ambiguity, do not transcribe the cut-off word. Do
                not put punctuation at the end of truncated words.{' '}
              </p>
              <p class="block_827">
                <span class="text_18">Correct: </span>
                <span class="text_19">ကက သ ပလ တ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">ကက သ ပလ တ</span>
                <span class="text_30">- </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_828">
                <span class="text_4">Explanation: Final vowel " </span>
                <span class="text_5">ာ</span>
                <span class="text_4">" was truncated </span>
              </p>
              <p class="block_829">
                <span class="text_4">from the word "</span>
                <span class="text_5">တ </span>
                <span class="text_4">". When the word is well </span>
              </p>
              <p class="block_830">known, please transcribe fully. </p>
              <p class="block_831">
                <span class="text_18">Correct: </span>
                <span class="text_19">ကက ဥ ခ က မ န စ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">ကက ဥ ခ က မ န စ ပ</span>
                <span class="text_30">- </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_832">Explanation: Unclear whether the speaker </p>
              <p class="block_833">
                <span class="text_4">would have said "</span>
                <span class="text_5">ပ </span>
                <span class="text_4">" or "</span>
                <span class="text_5">မလ </span>
                <span class="text_4">" in the end. In </span>
              </p>
              <p class="block_834">case we cannot know how the sentence is </p>
              <p class="block_835">
                ended, please transcribe until the last clearly{' '}
              </p>
              <p class="block_836">heard word. </p>
              <p class="block_837">
                <span class="text_18">Correct: </span>
                <span class="text_19">ကန ဘလ မ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_30">-</span>
                <span class="text_20">အန ဘလ မ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_838">
                <span class="text_4">Explanation: Initial consonant "</span>
                <span class="text_5">က</span>
                <span class="text_4">" from "</span>
                <span class="text_5">ကန </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_304">was cut off. </p>
              <p class="block_839">
                <span class="text_18">Correct: </span>
                <span class="text_19">က ပင က က နယ သ ပ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_30">-</span>
                <span class="text_20">ပင က က နယ သ ပ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_840">
                <span class="text_4">Explanation: Initial syllable " </span>
                <span class="text_5">က </span>
                <span class="text_4">" from </span>
              </p>
              <p class="block_841">
                <span class="text_4">" </span>
                <span class="text_5">က ပင က က </span>
                <span class="text_4">" was cut off. </span>
              </p>
              <p class="block_842">
                Sometimes, twisted words may be used in Burmese. The speaker may
                or may not have actual apraxia, sometimes, he/she may choose to
                say the word by purposely swapping vowels or syllables. English
                example: "kitchen" - "chicken" or "tea pot" - "top pea". If the
                speaker uses a twisted word, do not correct, transcribe as
                spoken.{' '}
              </p>
              <p class="block_843">
                <span class="text_17">Example </span>
                <span class="text_13">Correct: </span>
                <span class="text_14">သဘ တ ပ သလ ။ </span>
              </p>
              <p class="block_844">
                <span class="text_6">audio: " </span>
                <span class="text_7">သဘ တ ပ သလ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_845">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ ဘ တ ပ သလ ။ </span>
              </p>
              <p class="block_846">
                Explanation: It might be said this way on{' '}
              </p>
              <p class="block_847">purpose. No need to correct it. </p>
              <p class="block_848">
                <span class="text_18">Correct: </span>
                <span class="text_19">ထမ စင ကမယ ။ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">ထမ စင ကမယ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_541">
                Explanation: Understood as a call for meal time{' '}
              </p>
              <p class="block_849">
                <span class="text_4">"</span>
                <span class="text_5">ထမင စ </span>
                <span class="text_4">" but people may say "</span>
                <span class="text_5">ထမ စင </span>
                <span class="text_4">" by </span>
              </p>
              <p class="block_850">swapping vowels of each syllable. Please </p>
              <p class="block_851">transcribe as spoken. </p>
              <p class="block_852">
                <span class="text_18">Correct: </span>
                <span class="text_19">က ပ က က လ တ ပ ။ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">က ပ က က လ တ ပ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_853">
                <span class="text_18">Correct: </span>
                <span class="text_19">ဘ က လ က င နတယ ။ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">ဘ က လ က င နတယ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_854">
                Explanation: The speaker actually wants to say{' '}
              </p>
              <p class="block_855">
                <span class="text_4">"</span>
                <span class="text_5">ဘ က </span>
                <span class="text_4">
                  " but it is more fun to say backwards, so{' '}
                </span>
              </p>
              <p class="block_856">
                <span class="text_4">the uttered word may become "</span>
                <span class="text_5">ဘ က </span>
                <span class="text_4">". Please </span>
              </p>
              <p class="block_851">transcribe as spoken. </p>
              <p class="block_857">
                <span class="text_18">Correct: </span>
                <span class="text_19">အ ဘ က န ဝယ လ က ။ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">အ ဘ က န ဝယ လ က </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_854">
                Explanation: The speaker actually wants to say{' '}
              </p>
              <p class="block_858">
                "eBay" but happened to say backwards, so the{' '}
              </p>
              <p class="block_859">
                <span class="text_4">uttered word may become " </span>
                <span class="text_5">အ ဘ </span>
                <span class="text_4">" . Please </span>
              </p>
              <p class="block_851">transcribe as spoken. </p>
              <p class="block_504">
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.{' '}
              </p>
              <p class="block_860">● um </p>
              <p class="block_861">● uh </p>
              <p class="block_862">● right </p>
              <p class="block_863">● you know </p>
              <p class="block_861">● so </p>
              <p class="block_864">● like </p>
              <p class="block_865">
                Below is a list of all filler words that should only be
                transcribed if affirmations or answers to a question.{' '}
              </p>
              <p class="block_866">
                Correct: I need to get a new um telephone.{' '}
              </p>
              <p class="block_867">Correct: Do you like it? Mhm. </p>
              <p class="block_868">● ah </p>
              <p class="block_869">● er </p>
              <p class="block_870">● mhm </p>
              <p class="block_871">
                Only transcribe foreign words if they are common in your
                language or if speakers of your language would understand it. If
                it is foreign and speakers of your language would not know this
                word, use the Foreign Speech label as instructed in: Longform
                generic rules &gt; Unintelligible or foreign or singing.{' '}
              </p>
              <p class="block_872">Background and foreground speech </p>
              <p class="block_873">Foreign language </p>
              <p class="block_874">Accents </p>
              <p class="block_875">
                Correct non-standard pronunciations to their standard ones.
                Non-standard pronunciations could be from speakers of regional
                dialects, language learners, or speakers from different
                countries.{' '}
              </p>
              <p class="block_876">
                <span class="text_17">Example </span>
                <span class="text_13">Correct: </span>
                <span class="text_14">အ က က သယ ရတ </span>
              </p>
              <p class="block_877">
                <span class="text_6">audio: " </span>
                <span class="text_7">အ က က သယ ရသ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_878">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">အ က က သယ ရသ </span>
              </p>
              <p class="block_879">
                <span class="text_4">Explanation: Speaker said "</span>
                <span class="text_5">သ </span>
                <span class="text_4">" instead of "</span>
                <span class="text_5">တ </span>
                <span class="text_4">", </span>
              </p>
              <p class="block_880">but it should be spelled as standard. </p>
              <p class="block_881">
                <span class="text_4">Correct: </span>
                <span class="text_5">က ဇ တင တ </span>
              </p>
              <p class="block_882">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">က ဇ တင သ </span>
              </p>
              <p class="block_883">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">က ဇ တင သ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_884">
                <span class="text_4">Explanation: Speaker said " </span>
                <span class="text_5">က ဇ တင တ </span>
                <span class="text_4">" with a </span>
              </p>
              <p class="block_885">
                <span class="text_4">Northern accent, using "</span>
                <span class="text_5">သ</span>
                <span class="text_4">" instead of "</span>
                <span class="text_5">တ</span>
                <span class="text_4">". </span>
              </p>
              <p class="block_886">
                <span class="text_4">Correct: </span>
                <span class="text_5">က မ ယ စ လ။ </span>
              </p>
              <p class="block_887">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">က င ယ စ လ။ </span>
              </p>
              <p class="block_888">
                Explanation: Upper-river-region dialect uses{' '}
              </p>
              <p class="block_889">
                <span class="text_4">"</span>
                <span class="text_5">က င </span>
                <span class="text_4">" instead of "</span>
                <span class="text_5">က မ </span>
                <span class="text_4">". Use the standard </span>
              </p>
              <p class="block_890">spelling. </p>
              <p class="block_891">
                <span class="text_4">Correct: </span>
                <span class="text_5">မ က င ဂမ န ရ တယ ။ </span>
              </p>
              <p class="block_892">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မ က န ဂမ န ရ တယ ။ </span>
              </p>
              <p class="block_888">
                Explanation: Upper-river-region dialect uses{' '}
              </p>
              <p class="block_889">
                <span class="text_4">"</span>
                <span class="text_5">က န </span>
                <span class="text_4">" instead of "</span>
                <span class="text_5">က င </span>
                <span class="text_4">". Use the standard </span>
              </p>
              <p class="block_890">spelling. </p>
              <p class="block_893">
                <span class="text_4">Correct: </span>
                <span class="text_5">သ တ အ မ က သရက သ တ င လ တယ ။ </span>
              </p>
              <p class="block_894">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">တ တ အ မ က တရက တ တ င လ တယ ။ </span>
              </p>
              <p class="block_895">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">တ တ အ မ က တရက တ </span>
              </p>
              <p class="block_896">
                <span class="text_7">တ င လ တယ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_897">
                Explanation: Unintentionally mixing up the{' '}
              </p>
              <p class="block_898">
                <span class="text_4">pronunciation of "</span>
                <span class="text_5">တ</span>
                <span class="text_4">" and "</span>
                <span class="text_5">သ</span>
                <span class="text_4">" may occur. Please </span>
              </p>
              <p class="block_899">use the standard spelling regardless of </p>
              <p class="block_900">mistakes in the utterance. </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
