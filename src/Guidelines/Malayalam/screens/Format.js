import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Format = () => {
  const classes = useStyles()

  const headingIds = [
    'number',
    'currency-and-unit',
    'date-and-time',
    'address',
    'web',
    'abbreviation',
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
              <p class="block_30">Format</p>
              <p class="block_7">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <p class="block_28">Number</p>
              <p class="block_31">
                Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit). Use
                digits for cardinals and ordinals 10 and above, even if they are
                coordinated with numbers under 10. Transcribe all decimal
                numbers as digits.
              </p>
              <p class="block_23">ാ ിൽ ഒൻപത വിദ ാർഥികൾ ഉ . സംഖ 10ൽ കുറവായതാണ</p>
              <p class="block_23">
                ാ ിൽ 13 കു ികൾ ഉ . സംഖ 10 അെ ിൽ അതിന മുകളിലാണ
              </p>
              <p class="block_23">എനി ആറ പ ികളും 12 ത കളും ഉ .</p>
              <p class="block_33">
                <span class="text_9">3.14 </span>
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">മൂ േപായി ഒ നാല</sup>
                </span>
                <span class="text_10">
                  <sup class="calibre1">" </sup>
                </span>
              </p>
              <p class="block_23">ദശാംശ സംഖ കൾ</p>
              <p class="block_31">
                If a large number consists of only a number followed by
                "million", "billion", "trillion", or higher, then transcribe as
                a numeral plus word. Otherwise, transcribe as numerals.
              </p>
              <p class="block_23">1 ദശല ം കിളികൾ</p>
              <p class="block_23">ദശല ം കിളികൾ</p>
              <p class="block_23">1,000 കിളികൾ</p>
              <p class="block_23">₹1.5 ല ം േകാടി</p>
              <p class="block_31">
                Write lists of numbers with digits and without commas.
              </p>
              <p class="block_7">0 1 1 2 3 5 8 13</p>
              <p class="block_31">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p class="block_23">അവർ 1/4 കിേലാ ഗാം പ സാര ആവശ മാണ.</p>
              <p class="block_23">3/4 കിേലാമീ റിൽ, വലേ ാ തിരിയുക.</p>
              <p class="block_">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                9/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_23">2/3 കിേലാമീ റിൽ, ഇടേ ാ തിരിയുക.</p>
              <p class="block_23">ന ു ആവശ ം 5/16-മി ി മീ ർ ൂവാണ.</p>
              <p class="block_31">
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <p class="block_33">
                <span class="text_2">നീ എനി ₹70.50 കടം തരുേമാ? </span>
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">നീ എനി എഴുപത രൂപ അൻപത ൈപസ കടം </sup>
                </span>
              </p>
              <p class="block_33">
                <span class="text_11">തരുേമാ</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_33">
                <span class="text_2">അവൾ ആ വീട വാ ിയത ₹7.5 ല ിനാണ. </span>
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">അവൾ ആ വീട വാ ിയത എഴര ല ിനാണ</sup>
                </span>
                <span class="text_10">
                  <sup class="calibre1">" </sup>
                </span>
              </p>
              <p class="block_31">
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <p class="block_23">2% പാൽ</p>
              <p class="block_23">1 ദശല ം ശതമാനം</p>
              <p class="block_31">
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p class="block_31">
                Transcribe phone numbers using the most common format in the
                transcription language.
              </p>
              <p class="block_7">0487 271452</p>
              <p class="block_7">+91 123-456-7890</p>
              <p class="block_23">123-456-7890 എക ൻഷൻ 54</p>
              <p class="block_31">
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.
              </p>
              <p class="block_33">
                <span class="text_9">5 / 6 ^ 3 </span>
                <span class="text_12">"</span>
                <span class="text_11">അ ഭാഗം ആറ തിവർ ം</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_33">
                <span class="text_2">5 * 6 എ തയാണ? </span>
                <span class="text_12">"</span>
                <span class="text_11">അ ഗുണം ആറ എ തയാണ</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_33">
                <span class="text_2">√3 </span>
                <span class="text_12">"</span>
                <span class="text_11">മൂ ിെ െ വർ മൂലം</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_33">
                <span class="text_2">8 മണി ൂർ * ₹12 എ തയാണ? </span>
                <span class="text_12">"</span>
                <span class="text_11">എ മണി ൂർ ഗുണം പ രൂപ എ തയാണ</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_28">Currency and unit</p>
              <p class="block_">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                10/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_48">
                Transcribe currencies as commonly written in the transcription
                language.
              </p>
              <p class="block_18">
                <span class="text_9">₹10 </span>
                <span class="text_12">"</span>
                <span class="text_11">പ രൂപ</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_29">
                <span class="text_2">₹20 എ ത യുഎസ േഡാളറാണ? </span>
                <span class="text_12">"</span>
                <span class="text_11">ഇരുപത രൂപ എ ത യുഎസ േഡാളറാണ</span>
                <span class="text_12">" </span>
              </p>
              <p class="block_17">
                For all other currencies and slang terms for money, spell out
                the words.
              </p>
              <p class="block_18">
                <span class="text_2">ഞാൻ അ േഡാളർ െചലവഴി ു. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ഞാൻ $5 െചലവഴി ു. </span>
              </p>
              <p class="block_29">
                <span class="text_2">200 യുവാൻ N</span>
                <span class="text_3">OT</span>
                <span class="text_9">: ¥200 </span>
              </p>
              <p class="block_17">For degrees, use the ° symbol.</p>
              <p class="block_46">പുറ 20° ആണ താപനില.</p>
              <p class="block_21">
                <span class="text_2">അവിെട ഇതിന പ ിന താെഴയാണ വില. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: അവിെട ഇതിന -10 ആണ വില. </span>
              </p>
              <p class="block_16">
                Abbreviate all units that follow numeric values.
              </p>
              <p class="block_35">ഞാൻ 10 L ഓറ ജൂസ വാ ി.</p>
              <p class="block_17">
                If it is clear from context that a number or number sequence
                refers to currency or time, format it as such.
              </p>
              <p class="block_18">
                <span class="text_2">ഞാൻ 5:45ന അലാറം െവ ു. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ഞാൻ 545ന അലാറം െവ ു. </span>
              </p>
              <p class="block_19">Date and time</p>
              <p class="block_16">
                Use the natural form for transcribing dates.
              </p>
              <p class="block_18">
                <span class="text_2">ജൂലായ 12, 1964 </span>
                <span class="text_12">"</span>
                <span class="text_11">
                  ജൂലായ പ ു ആയിര ി െതാ ായിര ി അറുപ ി ാൽ
                </span>
                <span class="text_12">" </span>
              </p>
              <p class="block_42">ചി ം 4, 2017</p>
              <p class="block_42">78െല െപാതുതിരെ ടു</p>
              <p class="block_36">80കളിെല സംഗീതം</p>
              <p class="block_49">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                11/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_50">ബുധൻ, മാർ 6</p>
              <p class="block_51">
                Write times in hh:mm format whenever possible, unless it would
                look unnatural to do so.
              </p>
              <p class="block_52">3:00</p>
              <p class="block_36">4:00ന അലാറം െവ ുക</p>
              <p class="block_29">
                <span class="text_9">1:50</span>
                <span class="text_4">
                  <sub class="calibre2">ഏകേദശം 8:00ന </sub>
                </span>
              </p>
              <p class="block_53">Address</p>
              <p class="block_16">
                Favor full spellings over abbreviations where natural, but use
                abbreviations when explicitly spoken.
              </p>
              <p class="block_16">Use commas for ENTITY, LOCATION.</p>
              <p class="block_35">മെ ാണാൾ , കാേ ാ ീ</p>
              <p class="block_36">േകാഫി േഷാ , 95129</p>
              <p class="block_42">റിേ ൺ ഓഫ ദി കംഗിെ പദർശന സമയ ൾ, സാൻ േജാസ</p>
              <p class="block_36">മ ാതി സി ി ഹാൾ, മനില</p>
              <p class="block_53">Web</p>
              <p class="block_16">
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.
              </p>
              <p class="block_18">
                <span class="text_9">www.google.co.kr </span>
                <span class="text_12">"w w w </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">google </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">c o </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">k r" </span>
              </p>
              <p class="block_29">
                <span class="text_9">amazon.com </span>
                <span class="text_12">"amazon </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">com" </span>
              </p>
              <p class="block_36">എനി പിസ ഇ മാണ. #വിശ</p>
              <p class="block_29">
                <span class="text_9">mike@example.org </span>
                <span class="text_12">"mike </span>
                <span class="text_11">അ </span>
                <span class="text_12">example </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">org" </span>
              </p>
              <p class="block_17">
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <p class="block_54">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                12/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_41">
                <span class="text_9">www.amazon.com </span>
                <span class="text_12">"w w </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">amazon </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">com" </span>
              </p>
              <p class="block_29">
                <span class="text_9">google.co.uk </span>
                <span class="text_12">"google </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">co u k" </span>
              </p>
              <p class="block_29">
                <span class="text_9">www.forbes.com </span>
                <span class="text_12">"w w w forbes </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">com" </span>
              </p>
              <p class="block_21">
                <span class="text_9">www.facebook.com </span>
                <span class="text_12">"w w facebook </span>
                <span class="text_11">േഡാ </span>
                <span class="text_12">com" </span>
              </p>
              <p class="block_19">Abbreviation</p>
              <p class="block_17">
                Do not abbreviate unless the speaker says an abbreviated form.
              </p>
              <p class="block_55">
                <span class="text_2">േകരള പ ിക സർ ീസ ക N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: േകരള പി.എസ.സി ീഷൻ </span>
              </p>
              <p class="block_33">
                <span class="text_10">
                  <sup class="calibre1">"</sup>
                </span>
                <span class="text_4">
                  <sup class="calibre1">േകരള പ ിക സർ ീസ ക ീഷൻ</sup>
                </span>
                <span class="text_10">
                  <sup class="calibre1">" </sup>
                </span>
              </p>
              <p class="block_56">
                In acronyms, do not use periods between letters.
              </p>
              <p class="block_46">എംപി3 െ യർ, നാസ, നാസ്കാർ, ആംേകാ, സിപ േകാഡ</p>
              <p class="block_57">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                13/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_12">
                **This document is con dential, do not redistribute**
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Format" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Format

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
