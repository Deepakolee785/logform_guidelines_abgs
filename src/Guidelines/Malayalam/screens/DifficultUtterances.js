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
            <PageContentHeader currentPage="longform Malayalam" />
            <div className="content text">
              <p class="block_13">Di cult utterances</p>
              <p class="block_14">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or di erent language varieties.
              </p>
              <p class="block_15">Skipping a prompt</p>
              <p class="block_16">
                The instructions in this section are for PeraPera. In Crowd
                Compute, instead of tagging as [skip] the utterances that cannot
                be transcribed, click in the 'Cannot transcribe' button and
                select the appropriate reason.
              </p>
              <p class="block_17">
                If the prompt cannot be understood, skip it (tag it as [skip]).
                It is preferable to skip rather than mistranscribe.
              </p>
              <p class="block_16">
                Skip the utterance if it: contains at least some word(s) that
                cannot be understood; is in a different language typically not
                understood; contains no speech; contains only laughter; contains
                singing; contains only synthesized speech (e.g. the voices of
                Google Now or Siri) and/or pre-recorded speech (e.g. TV or
                radio).
              </p>
              <p class="block_17">
                For utterances that contain both user-generated speech and
                pre-recorded or synthesized speech, transcribe user- generated
                speech and ignore the pre-recorded/synthesized speech.
              </p>
              <p class="block_46">തിരുവന പുരെ കാലാവ എ ാണ?</p>
              <p class="block_17">
                If the speaker sings, [skip]. Use the tag [music] if an entire
                utterance is music from an instrument, radio, TV, etc.
              </p>
              <p class="block_17">
                [skip] if audio contains only laughter. Ignore laughter that is
                interspersed with speech (transcribe only the speech).
              </p>
              <p class="block_16">
                Profanity should be fully transcribed. However, feel free to
                skip a sentence that you feel uncomfortable transcribing.
              </p>
              <p class="block_17">
                If the context of an alpha-digit sequence suggests it may be a
                password, credit card number, social security number, etc., then
                use [skip].
              </p>
              <p class="block_19">Hesitations and truncations</p>
              <p class="block_16">
                Do not transcribe false starts unless they are complete words.
              </p>
              <p class="block_18">
                <span class="text_2">അതിലും വലി വലു മു </span>
                <span class="text_12">"</span>
                <span class="text_11">അതിലും വലി</span>
                <span class="text_12">- </span>
                <span class="text_11">വലു മു </span>
                <span class="text_12">" </span>
              </p>
              <p class="block_29">
                <span class="text_2">അതിലും വലിയ വലു മു </span>
                <span class="text_12">"</span>
                <span class="text_11">അതിലും വലിയ വലു മു </span>
                <span class="text_12">" </span>
              </p>
              <p class="block_64">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                17/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_31">
                Complete words that have been truncated only if a very small
                portion of the word is missing (one syllable or less in a
                multisyllable word) and it is obvious what the word should be.
                In cases of ambiguity, do not transcribe the cut-off word. Do
                not put punctuation at the end of truncated words.
              </p>
              <p class="block_33">
                <span class="text_2">ഞാൻ താമസി ു ത തൃ ൂരിലാണ </span>
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">ഞാൻ താമസി ു </sup>
                </span>
                <span class="text_2">അവസാന ിൽ "രി" </span>
                <span class="text_4">
                  <sup class="calibre1">ത തൃ ൂലാണ</sup>
                </span>
                <span class="text_10">
                  <sup class="calibre1">" </sup>
                </span>
              </p>
              <p class="block_23">ഒഴിവാ ി.</p>
              <p class="block_31">
                Transcribe repeated words as many times as uttered, but [skip]
                if a phrase is repeated more than ve times.
              </p>
              <p class="block_33">
                <span class="text_2">എനിെ ാരു െറയിൻേകാ വാ ണം വാ ണം. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: എനിെ ാരു െറയിൻേകാ വാ ണം. </span>
              </p>
              <p class="block_7">[skip]</p>
              <p class="block_">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                18/19
              </p>
              <p class="block_33">
                <span class="text_12">"</span>
                <span class="text_11">ഹേലാ ഹേലാ ഹേലാ ഹേലാ ഹേലാ</span>
                <span class="text_12">" </span>
                <span class="text_2">
                  അ ിൽ കൂടുൽ തവണ ആവർ ി ുവരു പദ പേയാഗം ഓഡിേയായിൽ ഉൾെ ാ ു ു.
                </span>
              </p>
              <p class="block_31">
                Do not transcribe ller words unless intended by the speaker to
                be transcribed. Never lengthen them.
              </p>
              <p class="block_33">
                <span class="text_2">അത നിെ ാർേ ഫാണ ആേണാ? </span>
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">ആഹ അത നിെ ാർേ ഫാണ ആേണാ</sup>
                </span>
                <span class="text_10">
                  <sup class="calibre1">" </sup>
                </span>
              </p>
              <p class="block_23">നി ൾ അ െന പറയുെ ിൽ.</p>
              <p class="block_33">
                <span class="text_12">"[</span>
                <span class="text_11">െനടുവീർ ി അഥവാ ദീർഘ ശ ാസം വി </span>
                <span class="text_12">] </span>
                <span class="text_11">നി ൾ അ െന പറയുെ ിൽ</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_33">
                <span class="text_2">അവൻ ഇ െന ആയിരു ു, "ആഹ". </span>
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">അവൻ ഇ െന ആയിരു ു ആഹഹ</sup>
                </span>
                <span class="text_10">
                  <sup class="calibre1">" </sup>
                </span>
              </p>
              <p class="block_28">Background and foreground speech</p>
              <p class="block_31">
                Only transcribe foreground speech. A user's speech may go from
                the foreground to the background or vice versa (determined by
                change in volume) and can be accompanied by change in speaker
                audience.
              </p>
              <p class="block_23">
                പിരാനകൾ സംസാരി ു യാൾ "പിരാനകൾ" എ ഉറെ റയു ു.
              </p>
              <p class="block_31">
                If two people take turns, without overlap, and are both in the
                foreground at roughly the same volume, transcribe the speech of
                both speakers. Separate the dialogue of different speakers with
                end punctuation.
              </p>
              <p class="block_32">
                <span class="text_">നീ</span>
                <span class="text_5">
                  <sub class="calibre2">വരു ുേ ാ? </sub>
                </span>
              </p>
              <p class="block_23">
                "നീ വരു ുേ ാ?" എ മുൻഭാഗ ു യാൾ േചാദി ു ു, മുൻഭാഗ ു മേ യാൾ "ഉ " എ
                മറുപടി പറയു ു.
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_50">ഉ .</p>
              <p class="block_51">
                If two or more people are speaking at once with no one clearly
                in the foreground, tag as [overlapping]. Do this for overlaps
                longer than one second. Use this tag even when one person is a
                bit louder than the other(s) and you can tell what they're
                saying.
              </p>
              <p class="block_44">Foreign language</p>
              <p class="block_17">
                If an utterance is in a foreign language, tag with [skip],
                unless it is an easily identi able media title or a foreign
                language phrase commonly understood in the transcription
                language. Stick to the capitalization and punctuation
                conventions of your target language.
              </p>
              <p class="block_26">ഈദ മുബാറക</p>
              <p class="block_23">
                ഈ അറബി വാക ം മു ീ ളുെട െപരു ാൾ ആശംസ േനരാൻ െപാതുവായി ഉപേയാഗി ു
                ഒരു വിേദശ പദം ആണ.
              </p>
              <p class="block_65">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                19/19
              </p>
              <p class="block_28">Accents</p>
              <p class="block_16">
                Correct non-standard pronunciations to their standard ones.
                Non-standard pronunciations could be from speakers of regional
                dialects, language learners, or speakers from different
                countries.
              </p>
              <p class="block_55">
                <span class="text_2">ന ി. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ന ി. </span>
              </p>
              <p class="block_23">
                സംസാരി ു യാൾ ന ി എ വാ ഒരു തമിഴ കലർ രീതിയിൽ സംസാരി ു. അത
                അംഗീകൃതമായ മലയാളമാ ി മാ ുക.
              </p>
              <p class="block_66">
                <span class="text_2">അത എവിെടയാണ? N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: അത ഏെടയാണ? </span>
              </p>
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
