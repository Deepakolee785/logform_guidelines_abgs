import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'
import CorrrectIncorrect from '../../../Components/common/CorrrectIncorrect'

const LongFormGenericRules = () => {
  const classes = useStyles()

  const headingIds = [
    'unintelligible-or-foreign-or-singing',
    'segmentation',
    'speaker-labeling',
    'audio-labels',
    'pii',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Armenian" />
            <div className="content">
              <h1 className={'large-heading'}>Longform generic rules</h1>
              <p className="text">
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <h2 className={'heading'}>
                  Unintelligible or foreign or singing
                </h2>
                <p className={'text'}>
                  If you hear speech that is unintelligible or in a foreign
                  language, create a speaker segment that covers only the audio
                  range with that speech. Select either the Unintelligible or
                  Foreign Speech Label and assign to the appropriate speaker.
                </p>
                <p className={'text'}>
                  If the entire audio is unintelligible or in a foreign
                  language, create a speaker segment that covers the entire
                  audio range and select either the Unintelligible or Foreign
                  Speech Label.
                </p>
                <p className={'text'}>
                  If you hear audio that is singing, transcribe the lyrics,
                  assign to the appropriate speaker, and add the Singing label.
                  If the singing is in a foreign language, select the Foreign
                  Speech label.
                </p>
                <div id="segmentation">
                  <h2 className={'heading'}>Segmentation</h2>
                  <p className={'text'}>
                    All speaker segment boundaries should be accurate with at
                    least 100ms precision.
                  </p>
                  <p className={'text'}>
                    Speaker turns should not contain pauses in speech that are
                    longer than 0.5 seconds. If a speaker does pause their
                    speech for longer than 0.5 seconds, end the speaker turn
                    before the pause then create a new turn for when the speaker
                    resumes talking.
                  </p>
                  <p className={'text'}>
                    Speaker turns should not be longer than 30 seconds. If a
                    single speaker talks for more than 30 consecutive seconds
                    without taking a 0.5 second pause, then end the turn at the
                    30 second mark and begin a new turn.
                  </p>
                </div>
                <div id="speaker-labeling">
                  <h2 className={'heading'}>Speaker labeling</h2>
                  <p className={'text'}>
                    All speaker labels should be consistently formatted. Speaker
                    labels should always: be in all lowercase, be spelled
                    correctly, and should not contain underscores or hyphens.
                    Only transcribe up to the 20th unique speaker.
                  </p>
                  <CorrrectIncorrect
                    correctText="speaker 1"
                    incorrectText="Speaker 1"
                  />
                  <CorrrectIncorrect
                    correctText="pre recorded speaker 1"
                    incorrectText="pre-recorded speaker_1"
                  />
                  <CorrrectIncorrect correctText="unidentifiable speaker" />
                  {/*  */}
                  <ul>
                    <li>
                      'speaker #' Used for different speakers in the audio.
                      Includes a number that corresponds to each different
                      speaker.
                    </li>
                    <li>
                      'pre recorded speaker #' Used when there is speech coming
                      from a machine. Includes a number that corresponds to each
                      different pre recorded speaker.
                    </li>
                    <li>
                      'unidentifiable speaker' Used when you cannot identify who
                      the speaker is. Does not ever include numbers.
                    </li>
                    <li>
                      'speaker Tom' Used when the name of a speaker becomes
                      known. The names of speakers should always be capitalized.
                      You can use first and last names. (Note: adding speaker
                      names will be allowed for some projects but not others. In
                      tool validators will indicate whether or not you can
                      submit a speaker name.)
                    </li>
                  </ul>
                </div>
              </div>
              <div id="audio-labels">
                <h2 className={'heading'}>Audio labels</h2>
                <p className={'text'}>
                  For instances with music and lyrics, create separate labels:
                  one for Music and one for Singing. Transcribe the singing
                  speech and assign to the appropriate speaker.
                </p>
                <p className={'text'}>
                  Below is a list of labels that may be available for you to
                  choose from. Each contain a description of when is an
                  appropriate time to use it.
                </p>
                <ul>
                  <li>
                    {' '}
                    Applause: Use this label if you hear one or more people
                    clapping or cheering.
                  </li>
                  <li>
                    DTMF: Stands for 'dual-tone multi-frequency.' This is the
                    sound you hear when a number is pressed during a phone call.
                    For example, 'Press one to speak to a representative' DTMF.
                  </li>
                  <li>
                    Foreign Speech: Use this label if the speaker is not talking
                    in the target language.
                  </li>
                  <li> Laughter: Use this label when you hear laughter.</li>
                  <li> Music: Use this label when you hear music.</li>
                  <li>
                    Noise: Use this label for instances of miscellaneous noise
                    events.
                  </li>
                  <li>
                    {' '}
                    PII: Use this label when you hear Personally Identifiable
                    Information (PII). For more information see the PII section
                    of this guideline.
                  </li>
                  <li>Ring Tone: Use this label when you hear a ring-tone.</li>
                  <li>Ring Tone: Use this label when you hear a ring-tone.</li>
                  <li>
                    {' '}
                    Singing: Use this label to indicate that the speaker is
                    singing their speech.
                  </li>
                  <li>Ring Tone: Use this label when you hear a ring-tone.</li>
                  <li>
                    {' '}
                    Unintelligible: Use this label to indicate that you cannot
                    understand what the speaker is saying.
                  </li>
                  <li>
                    {' '}
                    Unknown: Use this label for audio events that are not
                    classified to any of the above labels.
                  </li>
                </ul>
              </div>

              <div id="pii">
                <h2 className="heading">Pii</h2>
                <p className={'text'}>
                  PII stands for Personally Identifiable Information. PII is
                  information that is not publicly available, but can help you
                  or Google identify an individual person.
                </p>
                <p className={'text'}>
                  PII should never be transcribed. When PII is heard, create a
                  new speaker segment that captures the audio range of the PII
                  speech. Add the PII label and assign to the appropriate
                  speaker. Do not transcribe PII.
                </p>
                <p className={'text'}>
                  See the below list for all valid PII items
                </p>
                <div className={`${styles.calibre1} blue-text`}>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>NAME: First and/or Last name</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>CREDIT_CARD_NUMBER</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>EMAIL</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>PHONE_NUMBER</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>SOCIAL_INSURANCE_NUMBER</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>DRIVER_LICENSE_NUMBER</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      NATIONAL_HEALTH_SERVICE_NUMBER
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>SOCIAL_SECURITY_NUMBER</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>PASSPORT</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                      identifier issued by the Australian Taxation Office (ATO)
                      to each taxpaying entity
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      LOCATION_STREET: If the street name is heard, mark as PII.
                      Other locations such as State, City, County, zip code are
                      all OK to transcribe.
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      LOCATION_STREET_NUMBER: If the street number is heard,
                      mark as PII. Other locations such as State, City, County,
                      zip code are all OK to transcribe.
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>MRN (medical record number)</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                      Securities Identification Procedures. A CUSIP number
                      identifies most financial instruments, including: stocks
                      of all registered U.S. and Canadian companies, commercial
                      paper, and U.S. government and municipal bonds.
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      BC_PHN: Each B.C. resident enrolled with the Medical
                      Services Plan (MSP) is given a unique lifetime identifier
                      for health care called a Personal Health Number (PHN)
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      OHIP: Ontario Health Insurance Plan
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      QUEBEC_HIN: Quebec Health Insurance Number
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      CNI NIR: The French national identity card (French: Carte
                      nationale d'identite or CNI) is an official identity
                      document consisting of a laminated plastic card bearing a
                      photograph, name and address.
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      IBAN_CODE: The International Bank Account Number (IBAN) is
                      an internationally agreed system of identifying bank
                      accounts
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      SWIFT_CODE: A SWIFT code is an international bank code
                      that identifies particular banks worldwide. It's also
                      known as a Bank Identifier Code (BIC).
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      BANK_ROUTING_MICR: The numbers located on the bottom of a
                      check is called a MICR line. MICR means Magnetic Image
                      Character Recognition. The MICR line is made up of three
                      sets of numbers. The first set is called the ABA Bank
                      Routing Number or routing transit number (RTN)
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      DEA_NUMBER: A DEA number (DEA Registration Number) is an
                      identifier assigned to a health care provider (such as a
                      physician, optometrist, dentist, or veterinarian) by the
                      United States Drug Enforcement Administration
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                      unique 10-digit identification number issued to health
                      care providers in the United States by the Centers for
                      Medicare and Medicaid Services (CMS).
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>MEDICARE_NUMBER</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      NIE_NUMBER: The NIE is a tax identification number in
                      Spain
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or
                      Natural Persons Register) is a number assigned by the
                      Brazilian revenue agency to both Brazilians and resident
                      aliens who are subject to taxes in Brazil
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                      that acts as an identification for individuals, families
                      and corporates (Indian or Foreign), especially those who
                      pay Income Tax
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      BSN_NUMBER: netherlands: The citizen service number (BSN)
                      is a unique personal number allocated to everyone
                      registered in the Personal Records Database (BRP).
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      ICD_CODE: International Statistical Classification of
                      Diseases and Related Health Problems (ICD), a medical
                      classification list by the World Health Organization
                      (WHO). It contains codes for diseases, signs and symptoms,
                      abnormal findings, complaints, social circumstances, and
                      external causes of injury or diseases.
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>FDA_CODE: Prescription drug</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      NIF: Tax Identification Number in Spain
                      http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                    </span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>TAXPAYER_REFERENCE</span>
                  </div>
                  <div className={styles.block_19}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                      Registro de Poblacion (translated into English as Unique
                      Population Registry Code or else as Personal ID Code
                      Number). It is a unique identity code for both citizens
                      and residents of Mexico.
                    </span>
                  </div>
                  <div className={styles.block_20}>
                    <span className={styles.bullet_1}>●&nbsp;</span>
                    <span className={'text'}>
                      RRN: Receiver Registration Number (RNN) is a 10-character
                      alphanumeric can be to a bank account, a credit/debit
                      card, mobile wallet, or home delivery.
                    </span>
                  </div>
                </div>
                <p className={'text'}>
                  Information that does not fit the above PII rules should NOT
                  be considered PII. Some examples of things that are not PII
                  are:
                </p>
                <CorrrectIncorrect correctText="Correct: Commonly known names like Taylor Swift, Tom Hanks, Michael Jordan" />
                <CorrrectIncorrect correctText="Company or Business name, phone number, or address." />
                <CorrrectIncorrect correctText="Pet names" />
                <CorrrectIncorrect correctText="Social media handles" />
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Long Form Generic Rules"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default LongFormGenericRules

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
