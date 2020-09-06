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
            <PageContentHeader currentPage="longform Turskish" />
            <div className="content text">
              <p className={'large-heading'}>Longform generic rules</p>
              <p className={'text'}>
                Follow the rules in this section for tagging and transcribing
                speaker segments for longform audio. Transcribe ALL speech that
                is heard, this includes pre recorded and synthesized speech. For
                speech that is unintelligible, foreign, or singing, please refer
                to the relevant section below.
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>
                <p className={'text'}>
                  If you hear speech that is unintelligible or in a foreign
                  language, create a speaker segment that covers only the audio
                  range with that speech. Then choose either the Unintelligible
                  or Foreign Speech option in the Label drop-down of the Edit
                  Annotation window and then assign to the appropriate speaker.
                </p>
                <p className={'text'}>
                  If the entire audio is unintelligible or in a foreign
                  language, create a speaker segment that covers the entire
                  audio range and select either the Unintelligible or Foreign
                  Speech option in the Label drop-down of the Edit Annotation
                  window.
                </p>
                <p className={'text'}>
                  If you hear audio that is singing, transcribe the lyrics,
                  assign to the appropriate speaker, and add the Singing label.
                  If the singing is in a foreign language, select the Foreign
                  Speech label.
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>
                <p className={'text'}>
                  If overlapping speech is occurring: the segment boundaries
                  should be accurate with at least 100ms precision.
                </p>
                <p className={styles.block_141}>
                  If overlapping speech is NOT occurring, the segment boundaries
                  do not have to be 100% precise but should start and end within
                  1 second from when the speaker begins/ends their speech. The
                  boundaries should not overlap with other speaker turns next to
                  the segment.
                </p>
                <p className={styles.block_142}>
                  Speaker turns should not contain pauses in speech that are
                  longer than 0.5 seconds. If a speaker does pause their speech
                  for longer than 0.5 seconds, end the speaker turn before the
                  pause then create a new turn for when the speaker resumes
                  talking.
                </p>
                <p className={styles.block_143}>
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
                  correctly, and should not contain underscores or hyphens. A
                  validator within the tool will prevent you from submitting
                  incorrect formats.
                </p>
                <p className={styles.block_146}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: speaker 1 </span>
                </p>
                <p className={styles.block_147}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Speaker 1 </span>
                </p>
                <p className={styles.block_148}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : pre recorded speaker 1{' '}
                  </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : pre-recorded speaker_1{' '}
                  </span>
                </p>
                <p className={styles.block_150}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : unidentifiable speaker{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    'speaker #' Used for different speakers in the audio.
                    Includes a number that corresponds to each different
                    speaker.
                  </span>
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    'pre recorded speaker #' Used when there is speech coming
                    from a machine. Includes a number that corresponds to each
                    different pre recorded speaker.
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    'unidentifiable speaker' Used when you cannot identify who
                    the speaker is. Does not ever include numbers.
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    'speaker Tom' Used when the name of a speaker becomes known.
                    The names of speakers should always be capitalized. You can
                    use first and last names. (Note: adding speaker names will
                    be allowed for some projects but not others. In tool
                    validators will indicate whether or not you can submit a
                    speaker name.)
                  </span>
                </p>
              </div>
              <div id="pii">
                <p className={'heading'}>Pii</p>
                <p className={'text'}>
                  PII stands for Personally Identifiable Information. PII is
                  information that is not publicly available, but can help you
                  or Google identify an individual person.
                </p>
                <p className={styles.block_157}>
                  PII should never be transcribed. When PII is heard, create a
                  new speaker segment that captures the audio range of the PII
                  speech. Add the PII label and assign to the appropriate
                  speaker. Do not transcribe PII.
                </p>
                <p className={styles.block_158}>
                  See the below list for all valid PII items
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    NAME: First and/or Last name{' '}
                  </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>CREDIT_CARD_NUMBER </span>
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>EMAIL </span>
                </p>
                <p className={styles.block_162}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>PHONE_NUMBER </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    SOCIAL_INSURANCE_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>DRIVER_LICENSE_NUMBER </span>
                </p>
                <p className={styles.block_165}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    NATIONAL_HEALTH_SERVICE_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_166}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>SOCIAL_SECURITY_NUMBER </span>
                </p>
                <p className={styles.block_167}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>PASSPORT </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                    identifier issued by the Australian Taxation Office (ATO) to
                    each taxpaying entity
                  </span>
                </p>
                <p className={styles.block_169}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    LOCATION_STREET: If the street name is heard, mark as PII.
                    Other locations such as State, City, County, zip code are
                    all OK to transcribe.
                  </span>
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    LOCATION_STREET_NUMBER: If the street number is heard, mark
                    as PII. Other locations such as State, City, County, zip
                    code are all OK to transcribe.
                  </span>
                </p>
                <p className={styles.block_171}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    MRN (medical record number){' '}
                  </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                    Securities Identification Procedures. A CUSIP number
                    identifies most financial instruments, including: stocks of
                    all registered U.S. and Canadian companies, commercial
                    paper, and U.S. government and municipal bonds.
                  </span>
                </p>
                <p className={styles.block_173}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    BC_PHN: Each B.C. resident enrolled with the Medical
                    Services Plan (MSP) is given a unique lifetime identifier
                    for health care called a Personal Health Number (PHN)
                  </span>
                </p>
                <p className={styles.block_174}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    OHIP: Ontario Health Insurance Plan{' '}
                  </span>
                </p>
                <p className={styles.block_175}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    QUEBEC_HIN: Quebec Health Insurance Number{' '}
                  </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    CNI NIR: The French national identity card (French: Carte
                    nationale d'identite or CNI) is an official identity
                    document consisting of a laminated plastic card bearing a
                    photograph, name and address.
                  </span>
                </p>
                <p className={styles.block_177}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    IBAN_CODE: The International Bank Account Number (IBAN) is
                    an internationally agreed system of identifying bank
                    accounts
                  </span>
                </p>
                <p className={styles.block_178}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    SWIFT_CODE: A SWIFT code is an international bank code that
                    identifies particular banks worldwide. It's also known as a
                    Bank Identifier Code (BIC).
                  </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    BANK_ROUTING_MICR: The numbers located on the bottom of a
                    check is called a MICR line. MICR means Magnetic Image
                    Character Recognition. The MICR line is made up of three
                    sets of numbers. The first set is called the ABA Bank
                    Routing Number or routing transit number (RTN)
                  </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    DEA_NUMBER: A DEA number (DEA Registration Number) is an
                    identifier assigned to a health care provider (such as a
                    physician, optometrist, dentist, or veterinarian) by the
                    United States Drug Enforcement Administration
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                    unique 10-digit identification number issued to health care
                    providers in the United States by the Centers for Medicare
                    and Medicaid Services (CMS).
                  </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MEDICARE_NUMBER </span>
                </p>
                <p className={styles.block_183}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    NIE_NUMBER: The NIE is a tax identification number in Spain
                  </span>
                </p>
                <p className={styles.block_184}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or Natural
                    Persons Register) is a number assigned by the Brazilian
                    revenue agency to both Brazilians and resident aliens who
                    are subject to taxes in Brazil
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                    that acts as an identification for individuals, families and
                    corporates (Indian or Foreign), especially those who pay
                    Income Tax
                  </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    BSN_NUMBER: netherlands: The citizen service number (BSN) is
                    a unique personal number allocated to everyone registered in
                    the Personal Records Database (BRP).
                  </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    ICD_CODE: International Statistical Classification of
                    Diseases and Related Health Problems (ICD), a medical
                    classification list by the World Health Organization (WHO).
                    It contains codes for diseases, signs and symptoms, abnormal
                    findings, complaints, social circumstances, and external
                    causes of injury or diseases.
                  </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    FDA_CODE: Prescription drug{' '}
                  </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    NIF: Tax Identification Number in Spain
                    http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                  </span>
                </p>
                <p className={styles.block_188}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TAXPAYER_REFERENCE </span>
                </p>
                <p className={styles.block_189}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                    Registro de Poblacion (translated into English as Unique
                    Population Registry Code or else as Personal ID Code
                    Number). It is a unique identity code for both citizens and
                    residents of Mexico.
                  </span>
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    RRN: Receiver Registration Number (RNN) is a 10-character
                    alphanumeric can be to a bank account, a credit/debit card,
                    mobile wallet, or home delivery.
                  </span>
                </p>
                <p className={styles.block_191}>
                  Information that does not fit the above PII rules should NOT
                  be considered PII. Some examples of things that are not PII
                  are:
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Commonly known names like Taylor Swift, Tom Hanks, Michael
                    Jordan
                  </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Company or Business name, phone number, or address.
                  </span>
                </p>
                <p className={styles.block_194}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Pet names </span>
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
