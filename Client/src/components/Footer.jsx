import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaMedium, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function FooterComp() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7-xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          {/* Logo section dev */}
          <div className='mt-5 '>
            <Link
              to='/'
              className='self-center 
          whitespace-nowrap 
          text-lg 
          sm:text-xl 
          font-semibold 
          dark:text-white'
            >
              <span
                className='px-2 py-1 bg-gradient-to-r 
            from-indigo-500
            via-purple-500
            to-pink-500 rounded-lg
             text-white'
              >
                Dev
              </span>
              Diaries
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Home
                </Footer.Link>

                <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                  About
                </Footer.Link>

                <Footer.Link href='/projects' target='_blank' rel='noopener noreferrer'>
                  Projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://github.com/NourFagou' target='_blank' rel='noopener noreferrer'>
                  Github
                </Footer.Link>

                <Footer.Link href='https://medium.com/@noureddinefagou' target='_blank' rel='noopener noreferrer'>
                  Medium
                </Footer.Link>

                <Footer.Link href='https://twitter.com/NourFagou' target='_blank' rel='noopener noreferrer'>
                  Twitter
                </Footer.Link>

                <Footer.Link href='https://www.instagram.com/NourFagou' target='_blank' rel='noopener noreferrer'>
                  Instagram
                </Footer.Link>

                <Footer.Link href='https://www.linkedin.com/in/NourFagou/' target='_blank' rel='noopener noreferrer'>
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='https://www.linkedin.com/in/NourFagou/' by="NourFagou's Blog" year={new Date().getFullYear()} />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='https://github.com/NourFagou' icon={BsGithub} />
            <Footer.Icon href='https://medium.com/@nouredinefagou' icon={FaMedium} />
            <Footer.Icon href='https://www.instagram.com/NourFagou' icon={FaInstagram} />
            <Footer.Icon href='https://www.linkedin.com/in/NourFagou/' icon={FaLinkedin} />
            <Footer.Icon href='https://twitter.com/NuorFagou' icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
