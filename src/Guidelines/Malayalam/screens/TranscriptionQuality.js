import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
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
            <PageContentHeader currentPage="longform Malayalam" />
            <div className="content text">
              <p class="block_13">Transcription quality</p>
              <p class="block_14">
                Comply with the standard rules of the writing system.
              </p>
              <p class="block_15">Typo</p>
              <p class="block_16">
                A typo results in the unintentional creation of a non-word.
              </p>
              <p class="block_17">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p class="block_18">
                <span class="text_2">എെ േഫസബു ിൽ പരിേശാധി ുക. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: എെ േഫസെബാ ിൽ പരിേശാധി ുക. </span>
              </p>
              <p class="block_19">Context error</p>
              <p class="block_16">
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <p class="block_20">
                <span class="text_2">ഇ-െമയിൽ നീ കേ ാ? N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ഈ െമയിൽ നീ കേ ാ? </span>
              </p>
              <p class="block_21">
                <span class="text_2">നീ അരക ിൽ ഇരി രുത. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: നീ അര ിൽ ഇരി രുത. </span>
              </p>
              <p class="block_19">Added or missing words</p>
              <p class="block_16">
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times and units
                of currency.
              </p>
              <p class="block_20">
                <span class="text_2">എനി അവിെട േപാകണം. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: എനി അവിെട തെ േപാകണം. </span>
                <span class="text_4">
                  <sup class="calibre1">"തെ " എ ത അധികമായി േചർ രുത. </sup>
                </span>
              </p>
              <p class="block_22">
                <span class="text_2">
                  അവിെട വെര യാ ത െച ാൻ ₹349 വളെര കൂടുതലാണ. N
                </span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : അവിെട വെര യാ ത െച ാൻ 349 വളെര കൂടുതലാണ.{' '}
                </span>
              </p>
              <p class="block_23">"₹" എ ത സംസാര ിൽ ഇെ ിലും ഉപേയാഗി ുക.</p>
              <p class="block_24">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                2/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_25">
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Dif cult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <p class="block_26">അവിെട എ ത റാസപെബറി ൂബറി ഉ ?</p>
              <p class="block_23">
                "റാസപെബറി" എ െത ായി പറ തിന േശഷം സംസാരി ു യാൾ അത സ യം തിരു ി വ മാ
                ി.
              </p>
              <p class="block_27">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                3/19
              </p>
              <p class="block_28">Substitution</p>
              <p class="block_19">Spacing</p>
              <p class="block_16">
                Use only one space between words and sentences.
              </p>
              <p class="block_18">
                <span class="text_2">േകരളം ഇ യിെല ഒരു സം ാനം ആകു ു? N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: േകരളം ഇ യിെല ഒരു സം ാനം ആകു ു? </span>
              </p>
              <p class="block_29">
                <span class="text_2">ഞാൻ അ െന കരുതു ു. നമു ശമി ാം. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ഞാൻ അ െന കരുതു ു. നമു ശമി ാം. </span>
              </p>
              <p class="block_17">
                For most types of punctuation, do not put a space between the
                preceding word and the punctuation.
              </p>
              <p class="block_18">
                <span class="text_2">നീ വരു ുേ ാ? N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: നീ വരു ുേ ാ ? </span>
              </p>
              <p class="block_21">
                <span class="text_2">ഹേലാ, ഇതാണ േഡാ. അേശാകൻ. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ഹേലാ, ഇതാണ േഡാ . അേശാകൻ. </span>
              </p>
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
