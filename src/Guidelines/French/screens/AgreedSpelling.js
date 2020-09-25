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
    'proper-names',
    'brand-and-product',
    // 'media-title',
    // 'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform French" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={styles.block_595}>
                <span className={styles.text_2}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>names.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_597}>
                  <span className={styles.text_2}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is said (often done for foreign names or businesses, for
                    example). Use lowercase letters{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    for the spelled-out portion. This rule does not apply to
                    acronyms or initialisms, or to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelled-out web or email addresses.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_21}>
                    Correct: Shopi s h o p i{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "Shopi" and then spelled it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_21}>
                    Correct: Comment aller au s h o p i ?{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    comment aller au s h o p i{' '}
                  </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_21}>
                    Correct: mots qui finissent en m e n t{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    mots qui finissent en m e n t{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.calibre2}>
                    Correct: a b c d e f g h i j k l m n o p q r s t u v w x y z
                  </span>
                </p>
                <p className={styles.block_430}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_21}>Correct: amazon.co.uk </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    amazon point c o point u k{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.calibre2}>
                    Explanation: In URLs domains, do not insert
                  </span>
                </p>
                <p className={styles.block_602}>spaces between the letters.</p>
                <p className={styles.block_219}>
                  <span className={styles.text_21}>Correct: PDG </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>p d g </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.calibre2}>
                    Explanation: Do not insert spaces between{' '}
                  </span>
                </p>
                <p className={styles.block_604}>letters in acronyms.</p>
                <p className={styles.block_605}>
                  <span className={styles.text_21}>Correct: FIFA </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced as the word "FIFA", or spelled out
                      "f i f a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_21}>Correct: NCAA </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Speaker says "n c double a", or "n c a a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_21}>Correct: AAA </span>
                  <span className={styles.text_22}>
                    Explanation: Speaker says "triple a", or "a a a".{' '}
                  </span>
                  <span className={styles.text_21}>Correct: T-shirt </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>t-shirt </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_21}>Correct: email </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>email </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_21}>Correct: LDAP </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>el-dap </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_21}>
                    Correct: TMAX, iPhone, USA, IBM, xkcd, MP3
                  </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_2}>
                    For uses of single letters, either referring to the letter
                    itself or some other meaning{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    associated with it, use capital letters. Do not add any s or
                    apostrophes for plurals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: mots qui commencent par J
                </p>
                <p className={styles.block_91}>Correct: Roulez les R.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Au collège elle n'avait que des A et des
                  </span>
                </p>
                <p className={styles.block_581}>B.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Combien il y a de A dans le mot{' '}
                  </span>
                </p>
                <p className={styles.block_304}>anaconda ?</p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_610}>
                  <span className={styles.text_2}>
                    Transcribe words representing laughter or other non-speech
                    vocalizations with up to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    three syllables, but no more.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  <span className={styles.calibre2}>
                    Correct: hé, ha, haha, hahaha, héhé, héhéhé, bou
                  </span>
                </p>
                <p className={styles.block_138}>hou, bou hou hou, lalala</p>
                <p className={styles.block_611}>
                  <span className={styles.text_30}>Correct: hahaha </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>ha ha ha ha ha </span>
                  <span className={styles.text_31}>" </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={styles.block_612}>
                  <span className={styles.text_2}>
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    pay attention to the correct format. Official format and
                    spelling of a proper name may{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    supersede the usual written transcription conventions
                    detailed in this document.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_19}>
                    Defer to official spellings of celebrity names.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_21}>Correct: M </span>
                  <span className={styles.text_22}>
                    Explanation: Spelled this way in privacy policy.{' '}
                  </span>
                  <span className={styles.text_21}>Correct: will.i.am </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_21}>Correct: Jenifer </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The celebrity spells her name differently
                      than the more common "Jennifer".
                    </span>
                  </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_2}>
                    If proper names include diacritics uncommon in your language
                    (ć, š, á, etc.), do not{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    include them in your spelling.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_2}>
                    If a personal name could have multiple spellings and context
                    does not help choose a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelling, use the spelling that yields the most Google
                    search hits when you search for{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the name followed by the word "name" (without quotation
                    marks) (e.g. "Anna name").
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_21}>
                    Correct: Appeler Sophia.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Appeler Sofia.{' '}
                  </span>
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_21}>Correct: MacDonald </span>
                  <span className={styles.text_22}>Incorrect: McDonald </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "Sophia prénom" (without quotation
                    marks) yields more results than "Sofia prénom", even though
                    searching "Sofia" yields more results than "Sophia" because
                    Sofia is the capital of Bulgaria.
                  </span>
                </p>
                <p className={styles.block_620}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "MacDonald nom" yields more search
                    results than "McDonald nom".
                  </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.calibre2}>
                    Note that this example refers to the surname,
                  </span>
                </p>
                <p className={styles.block_622}>not the restaurant chain.</p>
                <p className={styles.block_623}>
                  <span className={styles.text_21}>
                    Correct: Sophia MacDonald{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Search full names to see if they refer to a
                      celebrity. If the full name does not
                    </span>
                  </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.calibre2}>
                    belong to a celebrity, use the most common
                  </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.calibre2}>
                    spelling for each part of the name (e.g. search
                  </span>
                </p>
                <p className={styles.block_626}>
                  "Sophia prénom" and "MacDonald nom").
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_2}>
                    Spell and capitalize holidays as they are formatted within
                    the answer box above the list{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of Google Search results. If no box appears, defer to
                    Wikipedia's formatting, and if there{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is no Wikipedia article, use the most common format
                    according to Google Search{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>results.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.calibre2}>
                    Correct: Elle va chez sa sœur pour le réveillon de Noël.
                  </span>
                </p>
                <p className={styles.block_629}>
                  Correct: C'est quand l'Aïd el-Fitr cette année ? Correct:
                  Joyeux Hanouka !
                </p>
                <p className={styles.block_630}>
                  <span className={styles.calibre2}>
                    Explanation: In this example, the holiday is "Noël"
                    (Christmas) and "réveillon" (eve) is a common noun and
                    doesn't designate any holiday on its own thus shouldn't be
                    capitalised.
                  </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_19}>
                    Apart from celebrities, use the names most commonly found.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>2NE1 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ABBA </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AC/DC </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Adolf Hitler </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Alicia Keys</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Alison </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Amber Volakis </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Amine </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Agie </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Annick </span>
                </p>
                <p className={styles.block_634}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Anthonioz de Gaulle </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Anthony </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Apolline </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Arthur Jacquin </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Benoît </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Booba </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Bouffon vert </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Brad Pitt </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Britney Spears </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Cap'tain 2011 </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Capitaine Flam </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Carabaffe </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Cathy </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Charlie </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Christina </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Clara Morgane </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Cléopâtre </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Clotilde </span>
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Cristiana Reali </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Cyrille </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Danièle Gilbert </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Danny </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>De Borman </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Déborah </span>
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Depeche Mode </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Dieudonné </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Dr Nozman </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Eddy </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Eliott </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>El Piqueton </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Émerick </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Éric </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Éva </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ève</span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Felix Baumgartner </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Franck </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Franck Dubosc </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Gaëtan </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>George Bush </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>George Clooney </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>George Wassouf </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Ghislaine </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Gollum </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Hassan </span>
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Heinrich Harrer </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Hélène Ségara </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Hells Angels </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Hermann </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Hervé Vilard </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Hugues Aufray </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Jackie Chan </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Jacky </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Jason Derülo </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Jay-Z </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Jeannine </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Jean Moulin </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Jérémy </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Jérôme Bosch </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Joe </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Joël </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Johanna </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Johnny Hallyday </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Jorge Blanco </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Joueur du Grenier </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Julia Ormond </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Julie Pietri </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Kajol </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Karine </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Karl </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Kassav </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Kate Barry </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Katy Perry </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Kevin</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Killian </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>La Fouine </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lana Del Rey </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Laëtitia </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lauriane </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Léane </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lennie </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lenny </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Léo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Léo Matteï </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Leo Messi </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Les minions </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Liham </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lily </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lionel Messi </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lionel Richie </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Loanne </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Loïc </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lorànt Deutsch </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Louis XIII </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Louis XIV </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Louis-Ferdinand Céline{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Lucas </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Lucile </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>M.Pokora </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mac Lesggy </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Maëlys </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Maëva </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Maïlys </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Manu </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Marc </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Margot </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mariam </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Marianne Soubré </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Marie-Anna </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Marie-Anne </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Marie-Claude Pietragalla{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Marilou </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mario Testeur</span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Mark Zuckerberg </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Martin Garrix </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Maryse </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mathéo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mathias </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Maud </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>McQueen </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Michael Bublé </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Michaël Youn </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Michelle </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mickaël </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mister T. </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mister You </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mogo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mohamed </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>MovieStarPlanet </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Muriel </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nabilla </span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Natasha Bedingfield </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Neymar </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nicki Minaj </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Noah </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Noémie </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Nolwenn Leroy </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Oscar Wilde </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Oui-Oui </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>P!nk </span>
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Patrice Chéreau </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Phil Collins </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Prince Royce </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PSY </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Puggy </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Redfoo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rémi </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rene Russo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Richard Rich </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rilhac-Rancon </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rkia </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Roald Dahl</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Robert Downey Jr. </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rohff </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rupert Murdoch </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SAEZ </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Saïd </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Salvador Dali </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Sexion d'Assaut </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Shana </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Shrek </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Slender Man </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Slenderman </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Sophia </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Spider-Man </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Super Mamie </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Thalès </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>The Shin Sekaï </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Thibault </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Tiphanie </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Toutatis </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>U2 </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ursula Andress </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Valérie Karsenti </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Valérie Trierweiler </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Vaness </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Violetta </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>WaRTeK </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Wolverine </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Yannis </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Yohan </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Zahia </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Zlatan Ibrahimovic </span>
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_2}>
                    Follow official spelling as found on Géoportail, city
                    council official websites or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>Wikipédia.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Brétignolles-sur-Mer </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Buttes-Chaumont </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Châteauneuf</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Châtelet </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Comédie Française </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Dubaï </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Éauze </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Écosse </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Ensuès-la-Redonne </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Épernay </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Évreux </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Évry </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fegersheim </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fréjus </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Gençay </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Genève </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Goëno </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Grand Palais </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Haïti </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Haute-Garonne </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Île Maurice </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Chapelle-Largeau </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Nouvelle-Orléans </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Roche-sur-Yon </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Lambézellec </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Le Temple-de-Bretagne </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Les Folies Bergère </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Louvre </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Maison-Blanche </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Megève </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ménilles </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Méru </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Montélimar </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Monténégro </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nérondes </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>New York </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nîmes </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Noisy-sur-École </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Nouvelle-Orléans </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Oujda </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pars-lès-Romilly </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pleinchamp</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Port Racine </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rébeval </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rio de Janeiro </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Saint-Aunès </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Saint-Malo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Saint-Marcellin </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Saint-Martin-Lars </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Thonon-les-Bains </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_665}>
                  <span className={styles.text_2}>
                    Format proper names as they are most commonly formatted on
                    the entity's website{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (especially official documents), if available, or the
                    Wikipedia or IMDb page. In cases of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    ambiguity, defer to their privacy policy. If no other
                    sources, use top Google hits.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: IKEA</p>
                <p className={styles.block_90}>Incorrect: Ikea</p>
                <p className={styles.block_91}>Correct: eBay</p>
                <p className={styles.block_90}>Incorrect: Ebay</p>
                <p className={styles.block_666}>
                  <span className={styles.text_21}>Correct: Burger King </span>
                  <span className={styles.text_22}>
                    Incorrect: BURGER KING{' '}
                  </span>
                </p>
                <p className={styles.block_667}>Correct: LEGO</p>
                <p className={styles.block_264}>Incorrect: Lego</p>
                <p className={styles.block_619}>
                  <span className={styles.calibre2}>
                    Explanation: Do not spell "Burger King" all in upper case as
                    in the stylized form of the logo, stick to the official form
                    as per the privacy policy.
                  </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_2}>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    "Ok Glass", require their own particular spelling of "okay".
                    This spelling is unique to these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>cases.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_21}>Correct: Ok Google </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This is an Ok Google voice command, so spell
                      it with a lowercase k.
                    </span>
                  </span>
                </p>
                <p className={styles.block_343}>Correct: Ok Google Now</p>
                <p className={styles.block_139}>
                  Correct: Ok Google, où est le Starbucks ?
                </p>
                <p className={styles.block_139}>
                  Correct: Ok Google, citrouilles
                </p>
                <p className={styles.block_139}>Correct: OK.</p>
                <p className={styles.block_670}>
                  <span className={styles.text_21}>Correct: OK, David. </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This is not an Ok Google voice command, so
                      spell it with an uppercase K.
                    </span>
                  </span>
                </p>
                <p className={styles.block_343}>Correct: OK Laure, on y va.</p>
                <p className={styles.block_671}>
                  <span className={styles.text_2}>
                    Follow the official spelling, check on Wikipédia or choose
                    the spelling yielding more{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    results on Google search.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>0.facbook </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>01net </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>1euro.com </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>24 Heures du Mans </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>3 Suisses </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>4 Images 1 Mot </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>4murs.com</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>6play </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Acer Iconia A1-810 </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>ADA </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AERO 360 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Air Canada </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Air France </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Airsoft-Horizon </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Alain Afflelou </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AliExpress </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AlloCiné </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Ambiance &amp; Styles </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Ambulances de la Paix </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Android </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Angry Birds </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Apple </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ASICS </span>
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Assassin's Creed III </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>AssaultCube </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ASSEDIC </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Atlantic Records </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Audi A1 </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Audi R8 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Audiogénic </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Auto Backup </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AutoScout24 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Avast </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AVI </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>AXA </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>B.wifi </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Badoo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Balsamik </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Beretta </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>BFM TV </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Blu-ray </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>BMW </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Boit@look </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Bouygues </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Bouygues Telecom </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Budweiser</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Buffalo Grill </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Buttes-Chaumont </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>C-MAX </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>C&amp;A </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Cablevision </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Caisse d'Epargne </span>
                </p>
                <p className={styles.block_678}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Call of Duty: Black Ops 2{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Candy Crush </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>CaptaiNaruto </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Carter-Cash </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>CASA </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Cdiscount </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Celebrations </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Chasse au mot </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Chèques-Vacances </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Chimay </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Chrono-nutrition </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>CINEMA 4D </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Citroën </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Citroën Berlingo </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Citroën C5 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>citronnemoi.com </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Climatex </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Clio III </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Coca-Cola </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Coiff'Idis </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Colissimo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>coloriez.com </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Comet Traitements </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>concorde.com </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Côté Femme </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Cydia iOS 7 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>D17 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Dailymotion </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Decathlon </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Dérinox </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Despe </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Desperados </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>dieudosphère</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Direct Écureuil </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Disney Channel </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Dolce&amp;Gabbana </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>DpStream </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Dragon's Dogma </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>E.Leclerc </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Easy Cash </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>eBay </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ebooking </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>eDarling </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Écho de Frontenac </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ENT Net O'Centre </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Esso </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>EuroBasket </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Euromillions </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Eurosport </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Évasion 2000 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Extremetube </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fars News </span>
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Fédération Française de Football{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Fendt </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>FIFA </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fintro </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fixadent </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Flanby </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>flash disk </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Flashcode </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Flightradar24 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fluporn </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fnac </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Foot Mercato </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>FRAM </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Française des Jeux </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>France Télévisions </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Free </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Frites Express </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Fruit Ninja </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Galaxy Note 2 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Galaxy Trend</span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Galeries Lafayette </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Game Boy </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>GÉMO </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Gmail </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>GMF Assurances </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Golf V </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Google Earth </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Google Images </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Google Maps </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Google Now </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Google Play </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Google Translate </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Google+ </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>GO Sport </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Groupama </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>GTA IV </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>GTA V </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>H&amp;M </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Hit Radio </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>HMY </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Honda Civic </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Hotmail </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Hot Wheels </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>HUGO BOSS </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ICONITO </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>IKEA </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Imprim'land </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Infotrafic </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>iPad </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>iPhone </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>iPhone 5s </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>iPod </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>iPod touch </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>jeu.fr </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>JEU.info </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>jeu.info </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>JeuxdelaJungle </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>jeuxgo </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>K-Way</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Kärcher </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Keno </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Koezio </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Koodo Mobile </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>L'Épique </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>L'ÉQUIPE 21 </span>
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>L'Hebdo du Vendredi </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Banque Postale </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Chaîne Techno </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Poste </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Poste Mobile </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Redoute </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>La Vitrine Médicale </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>League of Legends </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>leboncoin </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Leclerc voyages </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>LEGO </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>LEGO Friends </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>LEGO Technic </span>
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Lexibook Tablet </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>LG </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>LibreOffice </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Liebherr </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ligue 1 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ligue 2 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>edIn </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Linux Mint </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>lol </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>LOTO </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Loto-Québec </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ma-bimbo </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MAAF </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MACIF </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Maisons du Monde </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Mario Bros. </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mario Kart </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Marques Avenue </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>McDo </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>McDonald's</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Megablast </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mercedes-Benz </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mercury </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Météo-Marine </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>meteociel </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MétéoMédia </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Microsoft </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Minecraft </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MINI Cooper </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>mobile 9 </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Modatoi </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Monza </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MovieStarPlanet </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mr Propre </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Mr.Bricolage </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Music Download </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MYTF1 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>MySpace </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>NAF NAF </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>NAO </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Nature &amp; Découvertes{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Navionics </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>NBA 2K14 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Need for Speed </span>
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Need for Speed: ProStreet{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Nespresso </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nestlé </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nintendo 3DS Lite </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Nintendo DSi XL </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Noz </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Numericable </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>ohmydollz </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ok Glass </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Ok Google </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Office Depot </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Omegle </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>OMplanète </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>OOo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>OpenOffice</span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>OpenOffice.org </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Optic 2000 </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Ouest-France </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>P'tit Basque </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pac-Man </span>
                </p>
                <p className={styles.block_692}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PagesBlanches </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PagesJaunes </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>panduro.fr </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pat le Chef </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PayPal </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PES </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pet Shop </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Peugeot </span>
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Peugeot Partner </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Philips </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PhoenixJP.Net </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Photoshop </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Phyto Android </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Pinypon </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Piwi </span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PlaceLibertine </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Play Store </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Playmobil </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PlayStation 3 </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PMU </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Point.P </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Point S </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pokébip </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pokédex </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pokémon </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Pôle emploi </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PornHub </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PornoXO </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PRO BTP </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Pro-Direct Soccer </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>PS Vita </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PS3 </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PS4 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>PS5</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Psychovision </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>purepeople.com </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Qashqai </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Quinté + </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>QWERTY </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Radardroid </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rap Genius </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Red Bull </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>RedTube </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Reebok </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Renault Mégane </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Resto-Truc </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Riva Press </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rolls-Royce </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rubson </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Rue89 </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Samsung 4K </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Samsung Apps </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Samsung Galaxy Ace 2 </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Samsung Galaxy Note II{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Samsung Galaxy Note 3 </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Samsung Galaxy S III </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Samsung Galaxy S4 </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    Samsung Galaxy S4 Free{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Samsung Tab 3 </span>
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SAQ Express </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Scénic </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SeLoger.com </span>
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Senior Proximeety </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>Showroomprive </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Siesta Frames </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SIM </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SimCity </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Simpson TV </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SKODA </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SMS Backup </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>Snap </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>soccer.com </span>
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>SOCKS</span>
                </p>
              </div>
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
