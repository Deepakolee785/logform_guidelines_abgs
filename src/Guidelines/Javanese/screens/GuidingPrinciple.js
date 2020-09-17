import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import styles from '../css/styles.module.css'
import Wrapper from '../Wrapper'

const GuidingPrinciplesUK_UA = () => {
  const classes = useStyles()
  const headingIds = [
    'difficult-utterance',
    'aggreed-spelling',
    'punctuation',
    'format',
  ]
  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Javanese" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p className={styles.block_}>
                <span className={styles.calibre1}>
                  Transcription guiding principles{' '}
                </span>
              </p>
              <p className={styles.block_1}>
                <span className={styles.text_}>
                  This document summarizes the guiding principles for certain
                  types of phrases, that are&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  transcribed in ways that conflict with standard grammar rules
                  for transcription&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  language. For language specific transcription, follow the
                  language specific written&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>domain convention.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_2}>
                <span className={styles.calibre1}>Difficult utterances </span>
              </p>
              <p className={styles.block_3}>
                <span className={styles.text_}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or&nbsp;
                </span>
                <span className={styles.text_1}>
                  {' '}
                  different language varieties.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_4}>
                <span className={styles.text_2}>Skipping a prompt&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_5}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If you can't understand part of the audio, transcribe only the
                  part you can&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  understand. For the part you cannot understand, create a
                  separate speaker&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  segment and add the Unintelligible label.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_6}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  synthesized, transcribe all of it.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_7}>
                <span className={styles.text_2}>
                  Hesitations and truncations&nbsp;
                </span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_8}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  know what the word is supposed to be, transcribe the entire
                  word. If you are not&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  sure what the word should be, do not transcribe the word at
                  all. Do not put&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  punctuation after words that have been cut off.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_9}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If a quotation is cut off in the middle, use an end quotation
                  mark anyway.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>entire number.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_10}>
                <span className={styles.text_2}>Accents&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_11}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>standard spelling&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>where is dat&nbsp; </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>Where is that?&nbsp;</span>
              </p>
              <p className={styles.block_14}>
                <span className={styles.calibre1}>Agreed spelling </span>
              </p>
              <p className={styles.block_15}>
                <span className={styles.text_}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper&nbsp;
                </span>
                <span className={styles.text_1}> names.&nbsp; </span>
              </p>
              <p className={styles.block_4}>
                <span className={styles.text_2}>Spelling out&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_16}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If a word is spelled out, write it with spaces in between.
                  This rule does not apply&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  to acronyms, URLs, or email addresses.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  how do you get to c o s t c o&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  How do you get to c o s t c o?&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_17}>
                <span className={styles.text_2}>Interjections&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_18}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe words representing laughter or other non speech
                  vocalizations. Some&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  of these words might be:&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_9}>
                  huh, woah, okay, yep, uh-huh, mhm, nah&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_9}>
                  This list is not exhaustive of all true interjections.&nbsp;
                </span>
              </p>
              <p className={styles.block_20}>
                <span className={styles.text_10}>● </span>
                <span className={styles.text_11}>
                  Annotate laughter that is included within speech.&nbsp;
                </span>
                <span className={styles.text_9}> </span>
              </p>
              <p className={styles.block_21}>
                <span className={styles.text_2}>Proper names&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_22}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  For proper names, always use the official spelling and
                  punctuation.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>will i am&nbsp; </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>will.i.am&nbsp; </span>
              </p>
              <p className={styles.block_23}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If a personal name could have multiple spellings and context
                  does not help&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  choose a spelling, use the spelling that yields the most
                  Google search hits when&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  you search for the name followed by the word "name" (without
                  quotation marks)&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>(e.g. "Anna name").&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>mcdonald&nbsp; </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>MacDonald&nbsp; </span>
              </p>
              <p className={styles.block_24}>
                <span className={styles.text_2}>Brand and product&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_25}>
                <span className={styles.text_10}>● </span>
                <span className={styles.text_11}>
                  Format brand and company names as officially formatted&nbsp;
                </span>
                <span className={styles.text_9}> </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  the team is sponsored by united healthcare&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  The team is sponsored by UnitedHealthcare.&nbsp;
                </span>
              </p>
              <p className={styles.block_26}>Media title&nbsp;</p>
              <p className={styles.block_27}>
                <span className={styles.text_10}>● </span>
                <span className={styles.text_11}>
                  Write media titles as they are most commonly written.&nbsp;
                </span>
                <span className={styles.text_9}> </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  screenshots of call of duty black ops two&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  screenshots of Call of Duty: Black Ops 2&nbsp;
                </span>
              </p>
              <p className={styles.block_24}>
                <span className={styles.text_2}>Multiple spellings&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_28}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If you hear a word that does not sound like a standard word of
                  your language&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  because there is a small sound change (i.e. accent, speech
                  errors, speech&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  impairment, etc.), transcribe the intended word.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  where is the nearest liberry&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  Where is the nearest library?&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_29}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If you hear a word that does not sound like a standard word of
                  your language, but&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  it is obviously based on real words, suffixes, prefixes,
                  infixes or circumfixes,&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>transcribe as is.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>interpretate&nbsp; </span>
              </p>
              <p className={styles.block_30}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If you hear a word that does not sound like a standard word of
                  your language&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  because it appears to be nonsense, first search for the word
                  in Google. If there is&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  a clear candidate, transcribe that word. If there is not a
                  clear candidate, but it is&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  easy to spell and articulated clearly, transcribe it anyway.
                  If there is no clear&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  candidate and it is not easy to spell, create a separate
                  speaker segment and add&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  the Unintelligible label.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>Souk Abdali&nbsp; </span>
              </p>
              <p className={styles.block_31}>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Explanation:​ </span>
                <span className={styles.text_6}>
                  User says Souk Abdali. Transcriber searches “sukabdali”,&nbsp;
                  finds correct results. Transcribe Souk Abdali.&nbsp;
                </span>
              </p>
              <p className={styles.block_2}>
                <span className={styles.calibre1}>Punctuation </span>
              </p>
              <p className={styles.block_32}>
                <span className={styles.text_}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in&nbsp;
                </span>
                <span className={styles.text_1}> this section.&nbsp; </span>
              </p>
              <p className={styles.block_33}>
                <span className={styles.text_2}>
                  Fragments versus sentences&nbsp;
                </span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_34}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Answers to questions and sentences with dropped subjects
                  should be&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  transcribed with ending punctuation.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  Who are you talking about? The guy next door.&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Explanation:​ </span>
                <span className={styles.text_9}>two speakers&nbsp; </span>
              </p>
              <p className={styles.block_35}>Commas&nbsp;</p>
              <p className={styles.block_36}>
                <span className={styles.text_10}>● </span>
                <span className={styles.text_11}>
                  Only use commas if they are required according to language
                  grammar.&nbsp;
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_14}>
                  Colon and quotation&nbsp;
                </span>
                <span className={styles.text_15}> </span>
              </p>
              <p className={styles.block_37}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If a speaker is quoting another person, transcribe a comma
                  before the quoted&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>speech.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  my friend said alligator crocodile&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  My friend said, "alligator crocodile".&nbsp;
                </span>
              </p>
              <p className={styles.block_38}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If the quoted text is a complete sentence, transcribe ending
                  punctuation inside&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  the quotation marks. In cases like these, do not add an
                  additional ending&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  punctuation after the main sentence.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  jane asked are we meeting at three o clock&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  Jane asked, "Are we meeting at 3:00?"&nbsp;
                </span>
              </p>
              <p className={styles.block_39}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  uses include defining the word, talking about the spelling of
                  the word, or any&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  other type of reference to the word itself as a thing.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  He just said the word zucchini.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_40}>
                <span className={styles.text_2}>Other symbols&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_41}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£₹+=
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>%*&amp;-.;&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_42}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  When two opposing teams are mentioned, include a hyphen
                  between their&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>names.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  are you going to the saints bears game&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  Are you going to the Saints-Bears game?&nbsp;
                </span>
              </p>
              <p className={styles.block_20}>
                <span className={styles.text_10}>● </span>
                <span className={styles.text_11}>
                  Include a hyphen between locations in flight
                  itineraries.&nbsp;
                </span>
                <span className={styles.text_9}> </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>rome london flight&nbsp; </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>Rome-London flight&nbsp; </span>
              </p>
              <p className={styles.block_43}>
                <span className={styles.text_2}>Spoken punctuation&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_44}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  curly brackets. Do not add punctuation symbols after spoken
                  punctuation. Be&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  careful with homonyms.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>okay dot dot dot&nbsp; </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  Okay {`{dot} {dot} {dot}`}&nbsp;
                </span>
              </p>
              <p className={styles.block_45}>
                <span className={styles.calibre1}>Format </span>
              </p>
              <p className={styles.block_46}>
                <span className={styles.text_}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this&nbsp;
                </span>
                <span className={styles.text_1}> section.&nbsp; </span>
              </p>
              <p className={styles.block_7}>
                <span className={styles.text_2}>Number&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_47}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  and currency - see Currency and Unit). Use digits for
                  cardinals and ordinals 10&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  and above, even if they are coordinated with numbers under 10.
                  Transcribe all&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  decimal numbers as digits.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  I have six dogs and 12 parakeets.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_48}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  numerals and slashes. Be careful not to use pre-combined
                  fractions like "1⁄4".&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  in three fourths of a mile turn right&nbsp;
                </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  In 3/4 of a mi, turn right.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_49}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  For mixed numbers in math expressions and units &amp;
                  measures, transcribe them&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>using numerals.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_50}>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  the koala weight twelve and a third pounds yesterday&nbsp;{' '}
                </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Correct:​ </span>
                <span className={styles.text_6}>
                  The koala weighed 12 and 1/3 lb yesterday.&nbsp;
                </span>
              </p>
              <p className={styles.block_51}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  When referring to items (not units or measures), write
                  fractions out in words.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  With mixed numbers, write the whole number part out in words
                  if it is under ten,&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  otherwise write it with numerals.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  twelve and a half pumpkin pies were made&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  12 and a half pumpkin pies were made.&nbsp;
                </span>
              </p>
              <p className={styles.block_52}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe percentages using numerals followed by the "%"
                  sign. In the unlikely&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  case that you encounter a number of a million or greater used
                  as a percentage,&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>spell it out.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>two percent milk&nbsp; </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>2% milk&nbsp; </span>
              </p>
              <p className={styles.block_53}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Use Roman numerals only when part of an official name or
                  title.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  king henry the eighth&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>King Henry VIII&nbsp; </span>
              </p>
              <p className={styles.block_54}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe seasons and episodes of television shows with
                  numerals.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  season three episode two&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>season 3 episode 2&nbsp; </span>
              </p>
              <p className={styles.block_55}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe phone numbers using the most common format(s) in
                  the&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  transcription language.&nbsp;
                </span>
              </p>
              <p className={styles.block_56}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe phone numbers as you would write them down in their
                  natural groups.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  When applicable, the STD code should be surrounded by
                  spaces.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_57}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Math expressions should be transcribed with numerals and math
                  symbols with&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  spaces in between them.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  five times six to the third&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>5 / 6 ^ 3&nbsp; </span>
              </p>
              <p className={styles.block_40}>
                <span className={styles.text_2}>Currency and unit&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_58}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe currencies as commonly written in transcription
                  locale.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Abbreviate all units that follow numeric values.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  my family bought ten liters of orange juice&nbsp;
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  My family bought 10 L of orange juice.&nbsp;
                </span>
              </p>
              <p className={styles.block_59}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If it is clear from context that a number or number sequence
                  refers to currency or&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  time, format it as such.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  milk is two ninety nine&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>Milk is $2.99.&nbsp; </span>
              </p>
              <p className={styles.block_24}>
                <span className={styles.text_2}>Date and time&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_60}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Use the common form for transcribing dates and times as used
                  in transcription&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>language.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_61}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>to do so.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  a few minutes after three&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  a few minutes after 3:00&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_62}>
                <span className={styles.text_2}>Address&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_63}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  when explicitly spoken.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  751 Jefferson Street, New York City&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_64}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Transcribe entities and locations by using a comma between
                  them "ENTITY,&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>LOCATION"&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_19}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  McDonald's, Castro Street&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_65}>
                <span className={styles.text_2}>Web&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_66}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>capitalize them.&nbsp;</span>
              </p>
              <p className={styles.block_67}>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  im so hashtag hungry i could eat a whole pizza&nbsp;{' '}
                </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Correct:​ </span>
                <span className={styles.text_6}>
                  I'm so #hungry I could eat a whole pizza.&nbsp;
                </span>
              </p>
              <p className={styles.block_68}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>says "backslash".&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_69}>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  h t t p colon backslash backslash mail dot yahoo dot com&nbsp;{' '}
                </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Correct:​ </span>
                <span className={styles.text_6}>
                  http:\mail.yahoo.com&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_70}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>
                  these errors. If the speaker doesn't say the "w"s at all, do
                  not add them.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Example Audio:​ </span>
                <span className={styles.text_6}>
                  w w facebook dot com&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>www.facebook.com&nbsp; </span>
              </p>
              <p className={styles.block_71}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_5}>individual letters.&nbsp;</span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_12}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Example Audio:​ </span>
                <span className={styles.text_9}>
                  w w w dot t a r g e t dot c o m”&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>www.target.com&nbsp; </span>
              </p>
              <p className={styles.block_72}>
                <span className={styles.text_2}>Abbreviation&nbsp;</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_73}>
                <span className={styles.text_4}>● </span>
                <span className={styles.text_5}>
                  Do not abbreviate unless the speaker says an abbreviated
                  form.&nbsp;
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_12}>○ </span>
                <span className={styles.text_13}>Correct:​ </span>
                <span className={styles.text_6}>
                  Warriors versus Lakers&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_74}>
                <span className={styles.text_10}>● </span>
                <span className={styles.text_11}>
                  In acronyms, do not use periods between letters.&nbsp;
                </span>
                <span className={styles.text_9}> </span>
              </p>
              <p className={styles.block_13}>
                <span className={styles.text_7}>○ </span>
                <span className={styles.text_8}>Correct:​ </span>
                <span className={styles.text_9}>
                  NASA, NASCAR, AAMCO, ZIP code&nbsp;{' '}
                </span>
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Guiding Principles"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default GuidingPrinciplesUK_UA

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
