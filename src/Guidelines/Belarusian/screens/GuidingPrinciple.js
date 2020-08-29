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
            <PageContentHeader currentPage="longform  Belarusian" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p class="block_">Transcription guiding principles </p>
              <p class="block_1">
                This document summarizes the guiding principles for certain
                types of phrases, that are transcribed in ways that conflict
                with standard grammar rules for transcription language. For
                language specific transcription, follow the language specific
                written domain convention.{' '}
              </p>
              <p class="block_2">Difficult utterances </p>
              <p class="block_3">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.{' '}
              </p>
              <p class="block_4">Skipping a prompt </p>
              <p class="block_5">
                ● If you can't understand part of the audio, transcribe only the
                part you can understand. For the part you cannot understand,
                create a separate speaker segment and add the Unintelligible
                label.{' '}
              </p>
              <p class="block_6">
                ● For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.{' '}
              </p>
              <p class="block_7">Hesitations and truncations </p>
              <p class="block_8">
                ● If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word. If you are not sure what the word
                should be, do not transcribe the word at all. Do not put
                punctuation after words that have been cut off.{' '}
              </p>
              <p class="block_9">
                ● If a quotation is cut off in the middle, use an end quotation
                mark anyway.{' '}
              </p>
              <p class="block_10">
                ● Transcribe only numbers that you hear even if the speaker
                didn't finish saying the entire number.{' '}
              </p>
              <p class="block_11">Accents </p>
              <p class="block_12">
                ● If you hear a word with non-standard pronunciation, transcribe
                the word using the standard spelling{' '}
              </p>
              <p class="block_13">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">where is dat </span>
              </p>
              <p class="block_14">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Where is that? </span>
              </p>
              <p class="block_15">Agreed spelling </p>
              <p class="block_16">
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              <p class="block_17">Spelling out </p>
              <p class="block_18">
                ● If a word is spelled out, write it with spaces in between.
                This rule does not apply to acronyms, URLs, or email addresses.{' '}
              </p>
              <p class="block_19">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">how do you get to c o s t c o </span>
              </p>
              <p class="block_20">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">How do you get to c o s t c o? </span>
              </p>
              <p class="block_21">Interjections </p>
              <p class="block_22">
                ● Transcribe words representing laughter or other non speech
                vocalizations. Some of these words might be:{' '}
              </p>
              <p class="block_23">○ huh, woah, okay, yep, uh-huh, mhm, nah </p>
              <p class="block_24">
                ○ This list is not exhaustive of all true interjections.{' '}
              </p>
              <p class="block_25">
                ● Annotate laughter that is included within speech.{' '}
              </p>
              <p class="block_26">Proper names </p>
              <p class="block_27">
                ● For proper names, always use the official spelling and
                punctuation.{' '}
              </p>
              <p class="block_28">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">will i am </span>
              </p>
              <p class="block_29">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">will.i.am </span>
              </p>
              <p class="block_30">
                ● If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").{' '}
              </p>
              <p class="block_31">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">mcdonald </span>
              </p>
              <p class="block_32">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">MacDonald </span>
              </p>
              <p class="block_33">Brand and product </p>
              <p class="block_34">
                ● Format brand and company names as officially formatted{' '}
              </p>
              <p class="block_35">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  the team is sponsored by united healthcare{' '}
                </span>
              </p>
              <p class="block_36">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  The team is sponsored by UnitedHealthcare.{' '}
                </span>
              </p>
              <p class="block_37">Media title </p>
              <p class="block_38">
                ● Write media titles as they are most commonly written.{' '}
              </p>
              <p class="block_39">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  screenshots of call of duty black ops two{' '}
                </span>
              </p>
              <p class="block_40">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  screenshots of Call of Duty: Black Ops 2{' '}
                </span>
              </p>
              <p class="block_41">Multiple spellings </p>
              <p class="block_42">
                ● If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech errors, speech impairment, etc.), transcribe the
                intended word.{' '}
              </p>
              <p class="block_43">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">where is the nearest liberry </span>
              </p>
              <p class="block_44">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Where is the nearest library? </span>
              </p>
              <p class="block_45">
                ● If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, prefixes, infixes or circumfixes, transcribe as is.{' '}
              </p>
              <p class="block_46">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">interpretate </span>
              </p>
              <p class="block_47">
                ● If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, first search
                for the word in Google. If there is a clear candidate,
                transcribe that word. If there is not a clear candidate, but it
                is easy to spell and articulated clearly, transcribe it anyway.
                If there is no clear candidate and it is not easy to spell,
                create a separate speaker segment and add the Unintelligible
                label.{' '}
              </p>
              <p class="block_48">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Souk Abdali </span>
              </p>
              <p class="block_49">
                <span class="text_">○ </span>
                <span class="text_1">Explanation: </span>
                <span class="text_">
                  User says Souk Abdali. Transcriber searches “sukabdali”, finds
                  correct results. Transcribe Souk Abdali.{' '}
                </span>
              </p>
              <p class="block_50">Punctuation </p>
              <p class="block_51">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <p class="block_52">Fragments versus sentences </p>
              <p class="block_53">
                ● Answers to questions and sentences with dropped subjects
                should be transcribed with ending punctuation.{' '}
              </p>
              <p class="block_54">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  Who are you talking about? The guy next door.{' '}
                </span>
              </p>
              <p class="block_55">
                <span class="text_">○ </span>
                <span class="text_1">Explanation: </span>
                <span class="text_">two speakers </span>
              </p>
              <p class="block_56">Commas </p>
              <p class="block_57">
                ● Only use commas if they are required according to language
                grammar.{' '}
              </p>
              <p class="block_58">Colon and quotation </p>
              <p class="block_59">
                ● If a speaker is quoting another person, transcribe a comma
                before the quoted speech.{' '}
              </p>
              <p class="block_60">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">my friend said alligator crocodile </span>
              </p>
              <p class="block_61">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  My friend said, "alligator crocodile".{' '}
                </span>
              </p>
              <p class="block_62">
                ● If the quoted text is a complete sentence, transcribe ending
                punctuation inside the quotation marks. In cases like these, do
                not add an additional ending punctuation after the main
                sentence.{' '}
              </p>
              <p class="block_63">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  jane asked are we meeting at three o clock{' '}
                </span>
              </p>
              <p class="block_64">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  Jane asked, "Are we meeting at 3:00?"{' '}
                </span>
              </p>
              <p class="block_65">
                ● Do not use quotation marks for metalinguistic uses of words or
                phrases. These uses include defining the word, talking about the
                spelling of the word, or any other type of reference to the word
                itself as a thing.{' '}
              </p>
              <p class="block_66">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">He just said the word zucchini. </span>
              </p>
              <p class="block_67">Other symbols </p>
              <p class="block_68">
                ● Apart from standard letters, you should not use any other
                symbol than: 0-9
                äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                []√/@#$€£₹+= %*&amp;-.;{' '}
              </p>
              <p class="block_69">
                ● When two opposing teams are mentioned, include a hyphen
                between their names.{' '}
              </p>
              <p class="block_70">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  are you going to the saints bears game{' '}
                </span>
              </p>
              <p class="block_24">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  Are you going to the Saints-Bears game?{' '}
                </span>
              </p>
              <p class="block_71">
                ● Include a hyphen between locations in flight itineraries.{' '}
              </p>
              <p class="block_72">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">rome london flight </span>
              </p>
              <p class="block_13">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Rome-London flight </span>
              </p>
              <p class="block_73">Spoken punctuation </p>
              <p class="block_74">
                ● For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms.{' '}
              </p>
              <p class="block_75">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">okay dot dot dot </span>
              </p>
              <p class="block_76">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Okay {`{dot} {dot} {dot}`} </span>
              </p>
              <p class="block_77">Format </p>
              <p class="block_78">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <p class="block_79">Number </p>
              <p class="block_80">
                ● Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit). Use
                digits for cardinals and ordinals 10 and above, even if they are
                coordinated with numbers under 10. Transcribe all decimal
                numbers as digits.{' '}
              </p>
              <p class="block_81">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">I have six dogs and 12 parakeets. </span>
              </p>
              <p class="block_82">
                ● In math expressions or units &amp; measures, transcribe
                fraction words using numerals and slashes. Be careful not to use
                pre-combined fractions like "1⁄4".{' '}
              </p>
              <p class="block_83">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  in three fourths of a mile turn right{' '}
                </span>
              </p>
              <p class="block_84">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">In 3/4 of a mi, turn right. </span>
              </p>
              <p class="block_85">
                ● For mixed numbers in math expressions and units &amp;
                measures, transcribe them using numerals.{' '}
              </p>
              <p class="block_86">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  the koala weight twelve and a third pounds yesterday{' '}
                </span>
              </p>
              <p class="block_87">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  The koala weighed 12 and 1/3 lb yesterday.{' '}
                </span>
              </p>
              <p class="block_65">
                ● When referring to items (not units or measures), write
                fractions out in words. With mixed numbers, write the whole
                number part out in words if it is under ten, otherwise write it
                with numerals.{' '}
              </p>
              <p class="block_88">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  twelve and a half pumpkin pies were made{' '}
                </span>
              </p>
              <p class="block_89">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  12 and a half pumpkin pies were made.{' '}
                </span>
              </p>
              <p class="block_90">
                ● Transcribe percentages using numerals followed by the "%"
                sign. In the unlikely case that you encounter a number of a
                million or greater used as a percentage, spell it out.{' '}
              </p>
              <p class="block_91">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">two percent milk </span>
              </p>
              <p class="block_92">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">2% milk </span>
              </p>
              <p class="block_93">
                ● Use Roman numerals only when part of an official name or
                title.{' '}
              </p>
              <p class="block_94">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">king henry the eighth </span>
              </p>
              <p class="block_95">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">King Henry VIII </span>
              </p>
              <p class="block_96">
                ● Transcribe seasons and episodes of television shows with
                numerals.{' '}
              </p>
              <p class="block_97">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">season three episode two </span>
              </p>
              <p class="block_98">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">season 3 episode 2 </span>
              </p>
              <p class="block_99">
                ● Transcribe phone numbers using the most common format(s) in
                the transcription language.{' '}
              </p>
              <p class="block_100">
                ● Transcribe phone numbers as you would write them down in their
                natural groups. When applicable, the STD code should be
                surrounded by spaces.{' '}
              </p>
              <p class="block_101">
                ● Math expressions should be transcribed with numerals and math
                symbols with spaces in between them.{' '}
              </p>
              <p class="block_102">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">five times six to the third </span>
              </p>
              <p class="block_103">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">5 / 6 ^ 3 </span>
              </p>
              <p class="block_104">Currency and unit </p>
              <p class="block_105">
                ● Transcribe currencies as commonly written in transcription
                locale.{' '}
              </p>
              <p class="block_106">
                ● Abbreviate all units that follow numeric values.{' '}
              </p>
              <p class="block_107">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  my family bought ten liters of orange juice{' '}
                </span>
              </p>
              <p class="block_108">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  My family bought 10 L of orange juice.{' '}
                </span>
              </p>
              <p class="block_45">
                ● If it is clear from context that a number or number sequence
                refers to currency or time, format it as such.{' '}
              </p>
              <p class="block_109">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">milk is two ninety nine </span>
              </p>
              <p class="block_110">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Milk is $2.99. </span>
              </p>
              <p class="block_111">Date and time </p>
              <p class="block_112">
                ● Use the common form for transcribing dates and times as used
                in transcription language.{' '}
              </p>
              <p class="block_101">
                ● Write times in hh:mm format whenever possible, unless it would
                look unnatural to do so.{' '}
              </p>
              <p class="block_113">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">a few minutes after three </span>
              </p>
              <p class="block_114">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">a few minutes after 3:00 </span>
              </p>
              <p class="block_115">Address </p>
              <p class="block_116">
                ● Write out the full names of locations, roads, states, etc.
                Only use abbreviations when explicitly spoken.{' '}
              </p>
              <p class="block_117">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">751 Jefferson Street, New York City </span>
              </p>
              <p class="block_118">
                ● Transcribe entities and locations by using a comma between
                them "ENTITY, LOCATION"{' '}
              </p>
              <p class="block_119">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">McDonald's, Castro Street </span>
              </p>
              <p class="block_120">
                <span class="text_2">Web </span>
                <span class="text_3">
                  <sub class="calibre1">
                    ● Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </sub>
                </span>
              </p>
              <p class="block_121">capitalize them. </p>
              <p class="block_122">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  im so hashtag hungry i could eat a whole pizza{' '}
                </span>
              </p>
              <p class="block_123">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  I'm so #hungry I could eat a whole pizza.{' '}
                </span>
              </p>
              <p class="block_10">
                ● Do not correct speaker errors such as transcribing a slash
                when the user actually says "backslash".{' '}
              </p>
              <p class="block_124">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  h t t p colon backslash backslash mail dot yahoo dot com{' '}
                </span>
              </p>
              <p class="block_125">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">http:\mail.yahoo.com </span>
              </p>
              <p class="block_126">
                ● If the speaker drops a "w" or dots and it's an obvious URL,
                you should correct these errors. If the speaker doesn't say the
                "w"s at all, do not add them.{' '}
              </p>
              <p class="block_127">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">w w facebook dot com </span>
              </p>
              <p class="block_128">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">www.facebook.com </span>
              </p>
              <p class="block_129">
                ● If a URL is spelled out in individual letters, transcribe
                without spaces between individual letters.{' '}
              </p>
              <p class="block_130">
                <span class="text_">○ </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">w w w dot t a r g e t dot c o m” </span>
              </p>
              <p class="block_131">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">www.target.com </span>
              </p>
              <p class="block_132">Abbreviation </p>
              <p class="block_133">
                ● Do not abbreviate unless the speaker says an abbreviated form.{' '}
              </p>
              <p class="block_134">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Warriors versus Lakers </span>
              </p>
              <p class="block_135">
                ● In acronyms, do not use periods between letters.{' '}
              </p>
              <p class="block_136">
                <span class="text_">○ </span>
                <span class="text_1">Correct: </span>
                <span class="text_">NASA, NASCAR, AAMCO, ZIP code </span>
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
