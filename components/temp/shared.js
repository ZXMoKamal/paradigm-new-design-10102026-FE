import React from 'react'
import ArrowRight from "@/components/icons/arrowRight";
import { VideoSection } from "@/components/shared/videoSection";
import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { SectionHeader } from "@/components/shared/sectionHeader";
import { Select } from "@/components/shared/select";
import { Textarea } from "@/components/shared/textarea";
import Suggestions from "@/components/shared/suggestions";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";


function Shared() {
  return (
      <div className="flex flex-col gap-4">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* ── solid (default) ── */ }
          <Button variant="solid" size="sm" className={ "font-[600]" }>
              Default Blue
          </Button>

          {/* ── solid with custom colors ── */ }
          <Button
              variant="solidAnimated"
              size="sm"
          >
              Red Button
          </Button>



          {/* ── outline → fills on hover in 1s ── */ }
          <Button
              variant="outline" size="md" >
              Outline Blue
          </Button>

          {/* ── outline with custom border color ── */ }
          <Button
              variant="outlineDark"
              size="lg"
              icon={ <>1212</> }
              iconPosition="right"
          >
              Green Outline
          </Button>


          <Input placeholder="Enter your name" />
          <Input
              type="search"
              rounded="full"
              icon={ <span>🔍</span> }
              placeholder="Search..."
          />
          <Input
              border="thick"
              label="Email address"
          />
          <Input
              rounded="md"
              border="thin"
              icon={ <span>📧</span> }
              label="Enter your email"
          />



          <Select label="Choose country" rounded="full" border="thin">
              <option value="">Select one</option>
              <option value="us">USA</option>
              <option value="uk">UK</option>
              <option value="fr">France</option>
          </Select>


          <Textarea placeholder="Write your message..." rows={ 3 } />

          <Textarea
              icon={ <span>💬</span> }
              placeholder="Your message"
          />


          <Textarea
              border="thick"
              label="Description"
          />



          <Textarea
              rounded="md"
              border="thin"
              icon={ <span>📝</span> }
              label="Write something"
          />




          <SectionHeader
              subtitle="Board members"
              title="The Minds Behind the Story"
              description="Discover the visionary leaders shaping Paradigm’s journey. Our board members bring a wealth of experience and expertise to the table, guiding the company toward a future of innovation, excellence, and sustainable growth."
              buttons={
                  <Button
                      icon={ <ArrowRight className={ "w-4 h-4" } /> }
                      iconPosition="right"
                      variant="outline" size="md"  >
                      buttonText
                  </Button>
              }
          />
          <SectionHeader
              subtitle="OUR SERVICES"
              title="Take a Look"
              titleTag="h1"
              subtitleTag="span"
              description="Paradigm Capital Group offers a comprehensive range of services that support event management solutions, ensuring your event is expertly handled from A to Z"
              buttons={
                  <Button
                      icon={ <ArrowRight className={ "w-4 h-4" } /> }
                      iconPosition="right"
                      variant="outline" size="md"  >
                      buttonText
                  </Button>
              }
          />



          <VideoSection
              images={ [
                  { image: "/images/ezgif-60778de8042c2163.webp", alt: "" },
                  { image: "/images/ezgif-6e984ccb45b0aa96.webp", alt: "" },
              ] }
          />


          <Suggestions TitleTag={ "h2" } items={ [
              {
                  title: "Egypt- France Business Forum", img: "/images/ezgif-608a1f2271991c70.webp", alt: ""
              },
              {
                  title: "2nd Ministerial Conference Khartoum Process", img: "/images/ezgif-6704f832b48fff58.webp", alt: ""
              },
              {
                  title: "The National Initiative for Smart Green Projects", img: "/images/ezgif-6f3d8c1d6cb46c68.webp", alt: ""
              },
          ] } />


          <Navbar />
          <Footer />
      </div>
  )
}

export default Shared