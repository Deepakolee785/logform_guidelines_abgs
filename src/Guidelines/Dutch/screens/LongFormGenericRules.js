import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

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
            <PageContentHeader currentPage="longform Dutch" />
            <div className="content text">
              <p className={'large-heading'}>Longform generic rules</p>

              <p className={'text'}>
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>
                <p className={'text'}>
                  If you hear speech that is unintelligible or in a foreign
                  language, create a speaker segment that covers only the audio
                  range with that speech. Select either the Unintelligible or
                  Foreign Speech Label and assign to the appropriate speaker.
                </p>
                <p className={styles.block_141}>
                  If the entire audio is unintelligible or in a foreign
                  language, create a speaker segment that covers the entire
                  audio range and select either the Unintelligible or Foreign
                  Speech Label.
                </p>
                <p className={styles.block_142}>
                  If you hear audio that is singing, transcribe the lyrics,
                  assign to the appropriate speaker, and add the Singing label.
                  If the singing is in a foreign language, select the Foreign
                  Speech label.
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>
                <p className={'text'}>
                  All speaker segment boundaries should be accurate with at
                  least 100ms precision.
                </p>
                <p className={'text'}>
                  Speaker turns should not contain pauses in speech that are
                  longer than 0.5 seconds. If a speaker does pause their speech
                  for longer than 0.5 seconds, end the speaker turn before the
                  pause then create a new turn for when the speaker resumes
                  talking.
                </p>
                <p className={styles.block_146}>
                  Speaker turns should not be longer than 30 seconds. If a
                  single speaker talks for more than 30 consecutive seconds
                  without taking a 0.5 second pause, then end the turn at the 30
                  second mark and begin a new turn.
                </p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>Speaker labeling</p>
                <p className={'text'}>
                  All speaker labels should be consistently formatted. Speaker
                  labels should always: be in all lowercase, be spelled
                  correctly, and should not contain underscores or hyphens. Only
                  transcribe up to the 20th unique speaker.
                </p>
                <p className={`${styles.block_149} blue-text`}>
                  Correct: speaker 1
                </p>
                <p className={styles.block_150}>Incorrect: Speaker 1</p>
                <p className={`${styles.block_151} blue-text`}>
                  Correct: pre recorded speaker 1
                </p>
                <p className={styles.block_152}>
                  Incorrect: pre-recorded speaker_1
                </p>
                <p className={`${styles.block_153} blue-text`}>
                  Correct: unidentifiable speaker
                </p>
                <div className="blue-text">
                  <p className={styles.block_154}>
                    ● 'speaker #' Used for different speakers in the audio.
                    Includes a number that corresponds to each different
                    speaker.
                  </p>
                  <p className={styles.block_155}>
                    ● 'pre recorded speaker #' Used when there is speech coming
                    from a machine. Includes a number that corresponds to each
                    different pre recorded speaker.
                  </p>
                  <p className={styles.block_156}>
                    ● 'unidentifiable speaker' Used when you cannot identify who
                    the speaker is. Does not ever include numbers.
                  </p>
                  <p className={styles.block_157}>
                    ● 'speaker Tom' Used when the name of a speaker becomes
                    known. The names of speakers should always be capitalized.
                    You can use first and last names. (Note: adding speaker
                    names will be allowed for some projects but not others. In
                    tool validators will indicate whether or not you can submit
                    a speaker name.)
                  </p>
                </div>
              </div>
              <div id="audio-labels">
                <p className={'heading'}>Audio labels</p>
                <p className={'text'}>
                  For instances with music and lyrics, create separate labels:
                  one for Music and one for Singing. Transcribe the singing
                  speech and assign to the appropriate speaker.
                </p>
                <p className={styles.block_160}>
                  Below is a list of labels that may be available for you to
                  choose from. Each contain a description of when is an
                  appropriate time to use it.
                </p>
                <div className="blue-text">
                  <p className={styles.block_161}>
                    ● Applause: Use this label if you hear one or more people
                    clapping or cheering.
                  </p>
                  <p className={styles.block_162}>
                    ● DTMF: Stands for 'dual-tone multi-frequency.' This is the
                    sound you hear when a number is pressed during a phone call.
                    For example, 'Press one to speak to a representative' DTMF.
                  </p>
                  <p className={styles.block_163}>
                    ● Foreign Speech: Use this label if the speaker is not
                    talking in the target language.
                  </p>
                  <p className={styles.block_164}>
                    ● Laughter: Use this label when you hear laughter.
                  </p>
                  <p className={styles.block_165}>
                    ● Music: Use this label when you hear music.
                  </p>
                  <p className={styles.block_166}>
                    ● Noise: Use this label for instances of miscellaneous noise
                    events.
                  </p>
                  <p className={styles.block_167}>
                    ● PII: Use this label when you hear Personally Identifiable
                    Information (PII). For more information see the PII section
                    of this guideline.
                  </p>
                  <p className={styles.block_168}>
                    ● Ring Tone: Use this label when you hear a ring-tone.
                  </p>
                  <p className={styles.block_169}>
                    ● Singing: Use this label to indicate that the speaker is
                    singing their speech.
                  </p>
                  <p className={styles.block_170}>
                    ● Unintelligible: Use this label to indicate that you cannot
                    understand what the speaker is saying.
                  </p>
                  <p className={styles.block_171}>
                    ● Unknown: Use this label for audio events that are not
                    classified to any of the above labels.
                  </p>
                </div>
              </div>
              <div id="pii">
                <p className={'heading'}>Pii</p>
                <p className={'text'}>
                  PII stands for Personally Identifiable Information. PII is
                  information that is not publicly available, but can help you
                  or Google identify an individual person.
                </p>
                <p className={styles.block_174}>
                  PII should never be transcribed. When PII is heard, create a
                  new speaker segment that captures the audio range of the PII
                  speech. Add the PII label and assign to the appropriate
                  speaker. Do not transcribe PII.
                </p>
                <p className={styles.block_175}>
                  If applicable, select the appropriate PII subcategory which is
                  nested underneath the parent 'PII' label. If the appropriate
                  PII subcategory is not available then select the parent 'PII'
                  label to cover all other cases. If there are no PII
                  subcategories available to choose from then use the 'PII'
                  label for all cases of PII.
                </p>
                <p className={styles.block_176}>
                  See the below list for all valid PII items
                </p>
                <div className="blue-text">
                  <p className={styles.block_177}>
                    ● NAME: First and/or Last name
                  </p>
                  <p className={styles.block_178}>● CREDIT_CARD_NUMBER</p>
                  <p className={styles.block_179}>● EMAIL</p>
                  <p className={styles.block_180}>● PHONE_NUMBER</p>
                  <p className={styles.block_181}>● SOCIAL_INSURANCE_NUMBER</p>
                  <p className={styles.block_182}>● DRIVER_LICENSE_NUMBER</p>
                  <p className={styles.block_183}>
                    ● NATIONAL_HEALTH_SERVICE_NUMBER
                  </p>
                  <p className={styles.block_184}>● SOCIAL_SECURITY_NUMBER</p>
                  <p className={styles.block_185}>● PASSPORT</p>
                  <p className={styles.block_186}>
                    ● TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                    identifier issued by the Australian Taxation Office (ATO) to
                    each taxpaying entity
                  </p>
                  <p className={styles.block_187}>
                    ● LOCATION_STREET: If the street name is heard, mark as PII.
                    Other locations such as State, City, County, zip code are
                    all oké to transcribe.
                  </p>
                  <p className={styles.block_188}>
                    ● LOCATION_STREET_NUMBER: If the street number is heard,
                    mark as PII. Other locations such as State, City, County,
                    zip code are all oké to transcribe.
                  </p>
                  <p className={styles.block_177}>
                    ● MRN (medical record number)
                  </p>
                  <p className={styles.block_189}>
                    ● BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                    Securities Identification Procedures. A CUSIP number
                    identifies most financial instruments, including: stocks of
                    all registered U.S. and Canadian companies, commercial
                    paper, and U.S. government and municipal bonds.
                  </p>
                  <p className={styles.block_190}>
                    ● BC_PHN: Each B.C. resident enrolled with the Medical
                    Services Plan (MSP) is given a unique lifetime identifier
                    for health care called a Personal Health Number (PHN)
                  </p>
                  <p className={styles.block_191}>
                    ● OHIP: Ontario Health Insurance Plan
                  </p>
                  <p className={styles.block_192}>
                    ● QUEBEC_HIN: Quebec Health Insurance Number
                  </p>
                  <p className={styles.block_193}>
                    ● CNI NIR: The French national identity card (French: Carte
                    nationale d'identite or CNI) is an official identity
                    document consisting of a laminated plastic card bearing a
                    photograph, name and address.
                  </p>
                  <p className={styles.block_194}>
                    ● IBAN_CODE: The International Bank Account Number (IBAN) is
                    an internationally agreed system of identifying bank
                    accounts
                  </p>
                  <p className={styles.block_195}>
                    ● SWIFT_CODE: A SWIFT code is an international bank code
                    that identifies particular banks worldwide. It's also known
                    as a Bank Identifier Code (BIC).
                  </p>
                  <p className={styles.block_196}>
                    ● BANK_ROUTING_MICR: The numbers located on the bottom of a
                    check is called a MICR line. MICR means Magnetic Image
                    Character Recognition. The MICR line is made up of three
                    sets of numbers. The first set is called the ABA Bank
                    Routing Number or routing transit number (RTN)
                  </p>
                  <p className={styles.block_197}>
                    ● DEA_NUMBER: A DEA number (DEA Registration Number) is an
                    identifier assigned to a health care provider (such as a
                    physician, optometrist, dentist, or veterinarian) by the
                    United States Drug Enforcement Administration
                  </p>
                  <p className={styles.block_198}>
                    ● HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                    unique 10-digit identification number issued to health care
                    providers in the United States by the Centers for Medicare
                    and Medicaid Services (CMS).
                  </p>
                  <p className={styles.block_199}>● MEDICARE_NUMBER</p>
                  <p className={styles.block_200}>
                    ● NIE_NUMBER: The NIE is a tax identification number in
                    Spain
                  </p>
                  <p className={styles.block_201}>
                    ● CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or
                    Natural Persons Register) is a number assigned by the
                    Brazilian revenue agency to both Brazilians and resident
                    aliens who are subject to taxes in Brazil
                  </p>
                  <p className={styles.block_202}>
                    ● PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                    that acts as an identification for individuals, families and
                    corporates (Indian or Foreign), especially those who pay
                    Income Tax
                  </p>
                  <p className={styles.block_203}>
                    ● BSN_NUMBER: netherlands: The citizen service number (BSN)
                    is a unique personal number allocated to everyone registered
                    in the Personal Records Database (BRP).
                  </p>
                  <p className={styles.block_204}>
                    ● ICD_CODE: International Statistical Classification of
                    Diseases and Related Health Problems (ICD), a medical
                    classification list by the World Health Organization (WHO).
                    It contains codes for diseases, signs and symptoms, abnormal
                    findings, complaints, social circumstances, and external
                    causes of injury or diseases.
                  </p>
                  <p className={styles.block_205}>
                    ● FDA_CODE: Prescription drug
                  </p>
                  <p className={styles.block_206}>
                    ● NIF: Tax Identification Number in Spain
                    http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                  </p>
                  <p className={styles.block_207}>● TAXPAYER_REFERENCE</p>
                  <p className={styles.block_208}>
                    ● CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                    Registro de Poblacion (translated into English as Unique
                    Population Registry Code or else as Personal ID Code
                    Number). It is a unique identity code for both citizens and
                    residents of Mexico.
                  </p>
                  <p className={styles.block_204}>
                    ● RRN: Receiver Registration Number (RNN) is a 10-character
                    alphanumeric can be to a bank account, a credit/debit card,
                    mobile wallet, or home delivery.
                  </p>
                  <p className={styles.block_209}>
                    Information that does not fit the above PII rules should NOT
                    be considered PII. Some examples of things that are not PII
                    are:
                  </p>
                </div>
                <p className={`${styles.block_210} blue-text`}>
                  Correct: Commonly known names like Taylor
                </p>
                <p className={styles.block_211}>
                  Swift, Tom Hanks, Michael Jordan
                </p>
                <p className={`${styles.block_212} blue-text`}>
                  Correct: Company or Business name, phone
                </p>
                <p className={`${styles.block_213} blue-text`}>
                  number, or address.
                </p>
                <p className={`${styles.block_214} blue-text`}>
                  Correct: Pet names
                </p>
                <p className={`${styles.block_215} blue-text`}>
                  Correct: Social media handles
                </p>
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
