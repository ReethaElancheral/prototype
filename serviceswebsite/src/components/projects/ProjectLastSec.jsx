import expertiseImg from '../../assets/images/expertiseimg.png'
import electricalinstall from '../../assets/images/electricalinstall.png'
import safetyImg from '../../assets/images/safetyimg.png'

const ProjectLastSec = () => {
  return (
    <>
       <section className="bg-[#f1f3f8] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center">
        
        {/* Block 1 */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-[#4B69A9] w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4">
            <img
              src={expertiseImg}
              alt="Expertise"
              className="w-12 h-12"
            />
          </div>
          <h4 className="text-base sm:text-2xl font-semibold text-black">Expertise</h4>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-20 bg-black"></div>

        {/* Block 2 */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-[#4B69A9] w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4">
            <img
              src={electricalinstall}
              alt="Electrical Installation"
              className="w-12 h-12"
            />
          </div>
          <h4 className="text-base sm:text-2xl font-semibold text-black text-center">
            Electrical Installation
          </h4>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-20 bg-black"></div>

        {/* Block 3 */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-[#4B69A9] w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4">
            <img
              src={safetyImg}
              alt="Safety Maintenance"
              className="w-12 h-12"
            />
          </div>
          <h4 className="text-base sm:text-2xl font-semibold text-black">Safety Maintenance</h4>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProjectLastSec