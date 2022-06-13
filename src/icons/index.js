import React from "react";
import Svg, {Use, Path, Defs, G,Symbol,linearGradient,Stop,Filter ,Rect} from 'react-native-svg';


const Icons = ({name , dark}) => {
  return(
    <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <Defs>
          <G id="bird">
            <Path fill={dark?"none":"#2EC68F"} d="M12.607 11.172a4 4 0 1 0 5.656 5.656 4 4 0 0 0-5.657-5.656z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M22.592 5.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M1.802 20.915l10.274-10.274a4.728 4.728 0 0 1 2.4-1.294 6.75 6.75 0 0 1 12.79-4.077.75.75 0 0 1 .242.106l3 2a.75.75 0 0 1 0 1.248l-3 2a.748.748 0 0 1-.24.105c-.125.28-.267.55-.426.808V14.3c0 5.558-4.218 10.13-9.627 10.692l2.535 4.649a.75.75 0 0 1-1.317.718l-2.896-5.309h-5.29l2.503 4.59a.75.75 0 0 1-1.317.72l-2.896-5.31h-.36a8.26 8.26 0 0 1-6.375-2.409 1.22 1.22 0 0 1 0-1.726zM21.092 2.75a5.25 5.25 0 1 1-.982 10.409 4.728 4.728 0 0 0-1.316-2.518 4.73 4.73 0 0 0-2.795-1.358 5.25 5.25 0 0 1 5.092-6.533zm-2.298 14.609a4.729 4.729 0 0 0 1.342-2.676c.312.044.631.067.956.067 1.61 0 3.09-.564 4.25-1.506V14.3a9.25 9.25 0 0 1-9.25 9.25h-3.657c.378-.268.738-.57 1.076-.909l5.283-5.282zM12.45 21.58l2.834-2.833a4.734 4.734 0 0 1-3.208-1.39 4.734 4.734 0 0 1-1.389-3.207l-7.622 7.623a6.763 6.763 0 0 0 5.027 1.778v-.002h.035a6.754 6.754 0 0 0 4.323-1.97zm.687-5.283a3.25 3.25 0 1 1 4.596-4.596 3.25 3.25 0 0 1-4.596 4.596zM28.74 8l-.926.617a6.845 6.845 0 0 0 0-1.234L28.74 8z" clipRule="evenodd"/>
          </G>
          <G id="cat">
            <Path fill={dark?"none":"#2EC68F"} d="M11.768 7.844a11.04 11.04 0 0 0-4.77 3.833L9 3l2.768 4.844zM20.232 7.844a11.039 11.039 0 0 1 4.77 3.833L23 3l-2.768 4.844z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M12 12.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM10.75 15a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zM17.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0zM20 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM14 20.25a.75.75 0 0 0-.624 1.166l2 3a.75.75 0 0 0 1.248 0l2-3A.75.75 0 0 0 18 20.25h-4zm2 2.398l-.599-.898H16.6l-.599.898z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M9.651 2.628a.75.75 0 0 0-1.382.203L6.3 11.368A11.696 11.696 0 0 0 4.25 18c0 .944.111 1.861.321 2.74l-1.646.441a.75.75 0 1 0 .388 1.45l1.7-.456a11.72 11.72 0 0 0 1.393 2.61l-1.48.396a.75.75 0 1 0 .387 1.45l2.135-.573A11.717 11.717 0 0 0 16 29.75c3.37 0 6.409-1.419 8.552-3.692l2.135.572a.75.75 0 0 0 .388-1.449l-1.48-.396a11.718 11.718 0 0 0 1.392-2.61l1.7.455a.75.75 0 0 0 .388-1.449l-1.646-.44c.21-.88.321-1.797.321-2.741 0-2.46-.756-4.745-2.05-6.632L23.73 2.83a.75.75 0 0 0-1.381-.203L19.9 6.913A11.732 11.732 0 0 0 16 6.25c-1.367 0-2.68.234-3.9.663L9.65 2.628zm-.52 22.98A10.212 10.212 0 0 0 16 28.25c2.643 0 5.052-1 6.87-2.642l-2.945-.79a.75.75 0 1 1 .388-1.448l3.72.996a10.237 10.237 0 0 0 1.496-2.582l-3.604-.965a.75.75 0 1 1 .388-1.45l3.666.983c.177-.755.271-1.543.271-2.352a10.204 10.204 0 0 0-2.34-6.52A10.23 10.23 0 0 0 16 7.75a10.202 10.202 0 0 0-5.624 1.68 10.31 10.31 0 0 0-2.765 2.679l-.004.006A10.203 10.203 0 0 0 5.75 18c0 .81.094 1.597.271 2.352l3.666-.982a.75.75 0 1 1 .388 1.448l-3.604.966a10.24 10.24 0 0 0 1.495 2.582l3.72-.996a.75.75 0 1 1 .389 1.448l-2.945.79zM22.7 5.036l.929 4.028a11.77 11.77 0 0 0-2.34-1.559l1.41-2.469zM10.71 7.505L9.3 5.036l-.93 4.028a11.768 11.768 0 0 1 2.34-1.559z" clipRule="evenodd"/>
          </G>
          <G id="clapping">
            <Path fill={dark?"none":"#2EC68F"} fillRule="evenodd" d="M23.237 16.226l1.888-1.887c.298-.299.444-.691.439-1.082a1.495 1.495 0 0 1-.44 1.04l-2.12 2.12c.072-.073.15-.136.233-.19zM7.502 13.763l.006-4.278a1.5 1.5 0 1 1 3 0v2.5l7.546-7.546a1.5 1.5 0 1 1 2.12 2.122l1.415-1.415a1.5 1.5 0 1 1 2.121 2.122l-.707.707a1.5 1.5 0 1 1 2.122 2.121l-1.888 1.887a1.511 1.511 0 0 0-.234.192l.707-.707a1.5 1.5 0 1 0-2.12-2.122l-1.415 1.415a1.5 1.5 0 1 0-2.121-2.122l-7.546 7.546v-2.5a1.5 1.5 0 1 0-3 0l-.006.078z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M17.523 8.109a2.25 2.25 0 0 1 3.624.624 2.247 2.247 0 0 1 3.094.083c.62.62.802 1.51.548 2.29a2.25 2.25 0 0 1 .866 3.721l-.62.62a2.25 2.25 0 0 1 .62 3.622l-8.132 8.132a4.75 4.75 0 0 1-6.717 0l-2.829-2.829a34.812 34.812 0 0 0-.043-.043c-.508-.507-1.04-1.04-1.36-1.791-.336-.786-.409-1.723-.227-3.018l.41-5.864a2.25 2.25 0 0 1 4.5.03v.688l6.266-6.265zm4.95 7.778l.002-.002 2.12-2.12a.75.75 0 1 0-1.061-1.06l-6.718 6.718a.75.75 0 1 1-1.06-1.061l7.424-7.425a.75.75 0 1 0-1.06-1.06L14.694 17.3a.75.75 0 0 1-1.06-1.06l6.01-6.01a.75.75 0 0 0-1.061-1.061l-7.546 7.545a.75.75 0 0 1-1.28-.53v-2.5a.75.75 0 0 0-1.5 0c0 .018 0 .035-.002.053l-.414 5.914a.75.75 0 0 1-.006.053c-.167 1.167-.071 1.803.117 2.245.196.46.526.803 1.085 1.362l2.829 2.828a3.25 3.25 0 0 0 4.596 0l8.131-8.131a.75.75 0 0 0-1.06-1.061h-.001l-.001.002-4.595 4.594a.75.75 0 1 1-1.06-1.06l4.594-4.595.003-.002zm1.042 1.079l-.006.005.006-.005zm-1.06-1.06l.006-.007-.004.005-.002.002z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M6.347 19.52l.405-5.782.006-4.253a2.25 2.25 0 0 1 4.5 0v.69l6.265-6.266a2.25 2.25 0 0 1 3.623.624 2.25 2.25 0 0 1 3.643 2.372 2.25 2.25 0 0 1 .866 3.721l-.592.593a2.243 2.243 0 0 1 1.251 2.043 2.245 2.245 0 0 1-.66 1.607l-.591.592a2.25 2.25 0 0 1 .592 3.608l-8.132 8.132a4.75 4.75 0 0 1-6.717 0l-2.829-2.829-.043-.043c-.508-.507-1.04-1.04-1.36-1.791-.336-.786-.409-1.723-.227-3.018zm16.667-4.174l-.54.54a.75.75 0 0 0 1.06 1.062.75.75 0 0 1 1.06 1.06l-8.131 8.132a3.25 3.25 0 0 1-4.597 0l-2.828-2.828c-.559-.56-.889-.902-1.085-1.362-.188-.442-.284-1.078-.117-2.244a.75.75 0 0 0 .006-.054l.414-5.914a.755.755 0 0 0-.004-.143l.006-4.11a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 0 1.28.53l7.546-7.545a.75.75 0 0 1 1.271.648c-.024.15-2.215 2.375-2.332 2.491a.75.75 0 0 0 .912 1.176c.053-.031 2.225-2.148 2.27-2.194l1.414-1.414a.75.75 0 0 1 1.061 1.06l-.707.708a.75.75 0 1 0 1.06 1.06.75.75 0 0 1 1.061 1.06l-1.243 1.244a.75.75 0 0 0-.17.128l-.708.708a.75.75 0 0 0 1.06 1.06.75.75 0 0 1 1.281.533v.008a.746.746 0 0 1-.22.52l-1.122 1.122-.458.458z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M21.147 8.733c.33-.297.725-.479 1.137-.546a.75.75 0 0 1 .189-.742l-1.326 1.288z"/>
          </G>
          <G id="clapping">
            <Path fill={dark?"none":"#2EC68F"} fillRule="evenodd" d="M23.237 16.226l1.888-1.887c.298-.299.444-.691.439-1.082a1.495 1.495 0 0 1-.44 1.04l-2.12 2.12c.072-.073.15-.136.233-.19zM7.502 13.763l.006-4.278a1.5 1.5 0 1 1 3 0v2.5l7.546-7.546a1.5 1.5 0 1 1 2.12 2.122l1.415-1.415a1.5 1.5 0 1 1 2.121 2.122l-.707.707a1.5 1.5 0 1 1 2.122 2.121l-1.888 1.887a1.511 1.511 0 0 0-.234.192l.707-.707a1.5 1.5 0 1 0-2.12-2.122l-1.415 1.415a1.5 1.5 0 1 0-2.121-2.122l-7.546 7.546v-2.5a1.5 1.5 0 1 0-3 0l-.006.078z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M17.523 8.109a2.25 2.25 0 0 1 3.624.624 2.247 2.247 0 0 1 3.094.083c.62.62.802 1.51.548 2.29a2.25 2.25 0 0 1 .866 3.721l-.62.62a2.25 2.25 0 0 1 .62 3.622l-8.132 8.132a4.75 4.75 0 0 1-6.717 0l-2.829-2.829a34.812 34.812 0 0 0-.043-.043c-.508-.507-1.04-1.04-1.36-1.791-.336-.786-.409-1.723-.227-3.018l.41-5.864a2.25 2.25 0 0 1 4.5.03v.688l6.266-6.265zm4.95 7.778l.002-.002 2.12-2.12a.75.75 0 1 0-1.061-1.06l-6.718 6.718a.75.75 0 1 1-1.06-1.061l7.424-7.425a.75.75 0 1 0-1.06-1.06L14.694 17.3a.75.75 0 0 1-1.06-1.06l6.01-6.01a.75.75 0 0 0-1.061-1.061l-7.546 7.545a.75.75 0 0 1-1.28-.53v-2.5a.75.75 0 0 0-1.5 0c0 .018 0 .035-.002.053l-.414 5.914a.75.75 0 0 1-.006.053c-.167 1.167-.071 1.803.117 2.245.196.46.526.803 1.085 1.362l2.829 2.828a3.25 3.25 0 0 0 4.596 0l8.131-8.131a.75.75 0 0 0-1.06-1.061h-.001l-.001.002-4.595 4.594a.75.75 0 1 1-1.06-1.06l4.594-4.595.003-.002zm1.042 1.079l-.006.005.006-.005zm-1.06-1.06l.006-.007-.004.005-.002.002z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M6.347 19.52l.405-5.782.006-4.253a2.25 2.25 0 0 1 4.5 0v.69l6.265-6.266a2.25 2.25 0 0 1 3.623.624 2.25 2.25 0 0 1 3.643 2.372 2.25 2.25 0 0 1 .866 3.721l-.592.593a2.243 2.243 0 0 1 1.251 2.043 2.245 2.245 0 0 1-.66 1.607l-.591.592a2.25 2.25 0 0 1 .592 3.608l-8.132 8.132a4.75 4.75 0 0 1-6.717 0l-2.829-2.829-.043-.043c-.508-.507-1.04-1.04-1.36-1.791-.336-.786-.409-1.723-.227-3.018zm16.667-4.174l-.54.54a.75.75 0 0 0 1.06 1.062.75.75 0 0 1 1.06 1.06l-8.131 8.132a3.25 3.25 0 0 1-4.597 0l-2.828-2.828c-.559-.56-.889-.902-1.085-1.362-.188-.442-.284-1.078-.117-2.244a.75.75 0 0 0 .006-.054l.414-5.914a.755.755 0 0 0-.004-.143l.006-4.11a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 0 1.28.53l7.546-7.545a.75.75 0 0 1 1.271.648c-.024.15-2.215 2.375-2.332 2.491a.75.75 0 0 0 .912 1.176c.053-.031 2.225-2.148 2.27-2.194l1.414-1.414a.75.75 0 0 1 1.061 1.06l-.707.708a.75.75 0 1 0 1.06 1.06.75.75 0 0 1 1.061 1.06l-1.243 1.244a.75.75 0 0 0-.17.128l-.708.708a.75.75 0 0 0 1.06 1.06.75.75 0 0 1 1.281.533v.008a.746.746 0 0 1-.22.52l-1.122 1.122-.458.458z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M21.147 8.733c.33-.297.725-.479 1.137-.546a.75.75 0 0 1 .189-.742l-1.326 1.288z"/>
          </G>
          <G id="clockAlarm">
            <Path fill={dark?"none":"#2EC68F"} d="M4.414 10.364a2 2 0 0 1 0-2.829l2.121-2.12a2 2 0 0 1 2.829 0L10.45 6.5a11.042 11.042 0 0 0-4.614 5.286l-1.422-1.422zM26.228 11.715a11.043 11.043 0 0 0-4.648-5.251l1.05-1.05a2 2 0 0 1 2.828 0l2.121 2.121a2 2 0 0 1 0 2.829l-1.351 1.351z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M16.75 10a.75.75 0 0 0-1.5 0v6c0 .414.335.75.75.75h3a.75.75 0 0 0 0-1.5h-2.25V10z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M4.96 11.97l-1.076-1.076a2.75 2.75 0 0 1 0-3.889l2.12-2.121a2.75 2.75 0 0 1 3.89 0l.687.687A11.7 11.7 0 0 1 16 4.25a11.7 11.7 0 0 1 5.414 1.319l.685-.685a2.75 2.75 0 0 1 3.889 0l2.121 2.121a2.75 2.75 0 0 1 0 3.89l-1.07 1.07c.46 1.258.71 2.617.71 4.035 0 3.995-1.993 7.525-5.04 9.648l1.821 1.822a.75.75 0 1 1-1.06 1.06l-2-2a.744.744 0 0 1-.076-.088A11.7 11.7 0 0 1 16 27.75a11.7 11.7 0 0 1-5.394-1.308.754.754 0 0 1-.076.088l-2 2a.75.75 0 0 1-1.06-1.06l1.821-1.822A11.737 11.737 0 0 1 4.25 16c0-1.416.25-2.773.71-4.03zm2.106-6.026a1.25 1.25 0 0 1 1.767 0l.429.429a11.813 11.813 0 0 0-3.649 4.13l-.669-.67a1.25 1.25 0 0 1 0-1.767l2.122-2.122zM5.75 16c0-5.66 4.589-10.25 10.25-10.25 5.66 0 10.25 4.59 10.25 10.25S21.66 26.25 16 26.25c-5.661 0-10.25-4.59-10.25-10.25zM24.927 5.944a1.25 1.25 0 0 0-1.767 0l-.387.388a11.803 11.803 0 0 1 3.673 4.105l.603-.603a1.25 1.25 0 0 0 0-1.768l-2.122-2.122z" clipRule="evenodd"/>
          </G>
          <G id="dog">
            <Path fill={dark?"none":"#2EC68F"} fillRule="evenodd" d="M6 11c0-1.227.368-2.367 1-3.318V7H4.4A2.4 2.4 0 0 0 2 9.4v7.23A2.37 2.37 0 0 0 4.37 19c.9 0 1.63-.73 1.63-1.63V11zm20 0a5.972 5.972 0 0 0-1-3.318V7h2.6A2.4 2.4 0 0 1 30 9.4v7.23A2.37 2.37 0 0 1 27.63 19c-.9 0-1.63-.73-1.63-1.63V11z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM20 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM18.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"}  fillRule="evenodd" d="M7.204 6.25H4.4A3.15 3.15 0 0 0 1.25 9.4v7.23a3.12 3.12 0 0 0 3.12 3.12c.421 0 .817-.11 1.16-.301C6.638 24.206 10.905 27.75 16 27.75c5.095 0 9.362-3.544 10.47-8.301.343.192.739.301 1.16.301a3.12 3.12 0 0 0 3.12-3.12V9.4a3.15 3.15 0 0 0-3.15-3.15h-2.804a6.73 6.73 0 0 0-4.796-2h-8a6.73 6.73 0 0 0-4.796 2zm-1.953 4.62L5.25 11v6.37a.88.88 0 0 1-.88.88 1.62 1.62 0 0 1-1.62-1.62V9.4c0-.911.739-1.65 1.65-1.65h1.682a6.716 6.716 0 0 0-.83 3.12zM25.25 11v6a9.25 9.25 0 0 1-8.5 9.22v-3.573a2.751 2.751 0 0 0 2-2.647v-1.765a.985.985 0 0 0-.985-.985h-3.53a.985.985 0 0 0-.985.985V20c0 1.259.846 2.32 2 2.646v3.574A9.25 9.25 0 0 1 6.75 17v-6c0-2.9 2.35-5.25 5.25-5.25h8c2.9 0 5.25 2.35 5.25 5.25zm.668-3.25A6.712 6.712 0 0 1 26.75 11v6.37c0 .486.394.88.88.88a1.62 1.62 0 0 0 1.62-1.62V9.4a1.65 1.65 0 0 0-1.65-1.65h-1.683zM14.75 20v-1.25h2.5V20a1.25 1.25 0 1 1-2.5 0z" clipRule="evenodd"/>
          </G>
          <G id="doorbell">
            <Path fill={dark?"none":"#2EC68F"} d="M13 26a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M12.268 25.75H5a.75.75 0 0 1-.641-1.139l1.286-2.123a4.176 4.176 0 0 0 .605-2.164v-4.81c0-4.11 2.329-7.861 6.004-9.686a3.75 3.75 0 0 1 7.492 0 10.814 10.814 0 0 1 6.004 9.685v4.81c0 .764.21 1.512.605 2.165l1.286 2.123A.75.75 0 0 1 27 25.75h-7.268c.012.082.018.165.018.25v1A2.75 2.75 0 0 1 17 29.75h-2A2.75 2.75 0 0 1 12.25 27v-1c0-.085.006-.168.018-.25zM13.75 6a2.25 2.25 0 0 1 4.5 0v.06c0 .434.248.83.64 1.02l.1.048a9.314 9.314 0 0 1 5.26 8.385v4.81c0 1.038.284 2.055.822 2.942l.597.985H6.332l.596-.985a5.675 5.675 0 0 0 .822-2.941v-4.81a9.314 9.314 0 0 1 5.26-8.386l.1-.048c.392-.19.64-.586.64-1.02V6zM14 25.75a.25.25 0 0 0-.25.25v1c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-1a.25.25 0 0 0-.25-.25h-4z" clipRule="evenodd"/>
          </G>
          <G id="doorknock">
            <Path fill={dark?"none":"#2EC68F"} d="M23 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M21 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM19.75 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M5.25 4A2.75 2.75 0 0 1 8 1.25h16A2.75 2.75 0 0 1 26.75 4v25.25H29a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h2.25V4zm20 0v25.25H6.75V4c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25z" clipRule="evenodd"/>
          </G>
          <G id="fire">
            <Path fill={dark?"none":"#2EC68F"} d="M23 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M21 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM19.75 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M5.25 4A2.75 2.75 0 0 1 8 1.25h16A2.75 2.75 0 0 1 26.75 4v25.25H29a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h2.25V4zm20 0v25.25H6.75V4c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25z" clipRule="evenodd"/>
          </G>
          <G id="fridge">
            <Path fill={dark?"none":"#2EC68F"} d="M12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 14a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M12 13.25A1.75 1.75 0 0 0 10.25 15v4a1.75 1.75 0 1 0 3.5 0v-4A1.75 1.75 0 0 0 12 13.25zM11.75 15a.25.25 0 1 1 .5 0v4a.25.25 0 1 1-.5 0v-4zM10.25 7a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zM12 6.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M7.25 4A2.75 2.75 0 0 1 10 1.25h12A2.75 2.75 0 0 1 24.75 4v24c0 .45-.108.875-.3 1.25H27a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2.55c-.192-.375-.3-.8-.3-1.25V4zM10 29.25h12c.69 0 1.25-.56 1.25-1.25V11.75H8.75V28c0 .69.56 1.25 1.25 1.25zM23.25 4v6.25H8.75V4c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25z" clipRule="evenodd"/>
          </G>
          <G id="microwave">
          <Path fill={dark?"none":"#2EC68F"} d="M7 12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M8 10.25A1.75 1.75 0 0 0 6.25 12v6c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 17.75 18v-6A1.75 1.75 0 0 0 16 10.25H8zM7.75 12a.25.25 0 0 1 .25-.25h8a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25v-6zM23 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M21 10.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M5 6.25A2.75 2.75 0 0 0 2.25 9v12A2.75 2.75 0 0 0 5 23.75h22A2.75 2.75 0 0 0 29.75 21V9A2.75 2.75 0 0 0 27 6.25H5zM3.75 9c0-.69.56-1.25 1.25-1.25h22c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25V9z" clipRule="evenodd"/>
          </G>
          <G id="roostee">
            <Path fill={dark?"none":"#2EC68F"} d="M7 12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M15.75 6.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zm1.75-3.25a3.25 3.25 0 0 0 0 6.5h.036A4.733 4.733 0 0 0 16.25 13v3.261a2.791 2.791 0 0 0-.25-.011h-3a6.72 6.72 0 0 0-3.178.793A5.995 5.995 0 0 0 4.75 14.25a2.5 2.5 0 0 0-2.5 2.5V19A2.75 2.75 0 0 0 5 21.75h1.366A6.788 6.788 0 0 0 6.25 23v1c0 .966.784 1.75 1.75 1.75h.309c.36 2.267 2.323 4 4.691 4h6A6.75 6.75 0 0 0 25.75 23v-6.25h1.5a1.5 1.5 0 0 0 1.5-1.5 3 3 0 0 0-3-3h-.059a4.717 4.717 0 0 0-.52-1.524 2.25 2.25 0 1 0-.487-4.324 2.75 2.75 0 0 0-4.388-1.56A3.248 3.248 0 0 0 17.5 3.25zm-7.663 22.5A3.251 3.251 0 0 0 13 28.25h6c2.9 0 5.25-2.35 5.25-5.25v-2.25h-5.5V23A2.75 2.75 0 0 1 16 25.75H9.837zm8.913-6.5h5.5V13a3.25 3.25 0 0 0-6.5 0v3.879c.61.504 1 1.267 1 2.121v.25zm-11.916 1a6.771 6.771 0 0 1 1.75-2.356A4.497 4.497 0 0 0 4.75 15.75a1 1 0 0 0-1 1V19c0 .69.56 1.25 1.25 1.25h1.834zm20.416-5h-1.5v-1.5a1.5 1.5 0 0 1 1.5 1.5zM22 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm2.75 2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zM23 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd"/>
            <Path fill={dark?"#222624":"#2EC68F"} fillRule="evenodd" d="M7.75 23c0-2.9 2.35-5.25 5.25-5.25h3c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25H8a.25.25 0 0 1-.25-.25v-1z" clipRule="evenodd"/>
          </G>
          <G id="thunderstorm">
            <Path fill={dark?"none":"#2EC68F"} d="M16 25l6-8-1 5h4l-7 9 2-6h-4z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M13 1.25a6.751 6.751 0 0 0-6.709 6H6a3.75 3.75 0 1 0 0 7.5h20a3.75 3.75 0 1 0 0-7.5h-.309A4.751 4.751 0 0 0 18.438 4 6.74 6.74 0 0 0 13 1.25zM7.75 8a5.25 5.25 0 0 1 9.845-2.542.75.75 0 0 0 1.171.181A3.25 3.25 0 0 1 24.25 8c0 .415.336.751.75.751h1a2.25 2.25 0 0 1 0 4.5H6a2.25 2.25 0 0 1 0-4.5h1A.75.75 0 0 0 7.75 8zM22.735 17.147a.75.75 0 0 0-1.335-.597l-6 8a.75.75 0 0 0 .6 1.2h2.96l-1.672 5.013a.75.75 0 0 0 1.304.697l7-9A.75.75 0 0 0 25 21.25h-3.085l.82-4.103zM20 24.25h-2.5l3.116-4.155-.351 1.758a.75.75 0 0 0 .735.897h2.466l-3.37 4.333.616-1.846A.75.75 0 0 0 20 24.25z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M8.936 17.39a.75.75 0 0 1 .174 1.046l-2.5 3.5a.75.75 0 1 1-1.22-.872l2.5-3.5a.75.75 0 0 1 1.046-.174zM15.11 18.436a.75.75 0 0 0-1.22-.872l-2.5 3.5a.75.75 0 1 0 1.22.872l2.5-3.5z"/>
          </G>
          <G id="vacuumCleaner">
            <Path fill={dark?"none":"#2EC68F"} d="M16 27a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M15 2.25A4.75 4.75 0 0 0 10.25 7v2.25H9a.75.75 0 0 0-.75.75v1.291a6.751 6.751 0 0 0-6 6.709v8A3.75 3.75 0 0 0 6 29.75h4.45a3.75 3.75 0 1 0 4.3-6.067V14c0-.854-.39-1.617-1-2.121V10a.75.75 0 0 0-.75-.75h-1.25V7A3.25 3.25 0 0 1 15 3.75h5A3.25 3.25 0 0 1 23.25 7v18.25H22A2.75 2.75 0 0 0 19.25 28c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 28.75 28 2.75 2.75 0 0 0 26 25.25h-1.25V7A4.75 4.75 0 0 0 20 2.25h-5zm-5.25 9v-.5h2.5v.5h-2.5zm2.25 1.5c.69 0 1.25.56 1.25 1.25v9.258a3.75 3.75 0 0 0-3.787 4.992H6A2.25 2.25 0 0 1 3.75 26v-8c0-2.9 2.35-5.25 5.25-5.25h3zm1 12a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zm9 2c-.69 0-1.25.56-1.25 1.25 0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25c0-.69-.56-1.25-1.25-1.25h-4z" clipRule="evenodd"/>
          </G>
          <G id="waterDrop">
            <Path fill={dark?"none":"#2EC68F"} d="M10 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M9.354 11.75H5A2.75 2.75 0 0 1 2.25 9V7A2.75 2.75 0 0 1 5 4.25h4.354a2.751 2.751 0 0 1 2.646-2h4c1.259 0 2.32.846 2.646 2H21A6.75 6.75 0 0 1 27.75 11v4A2.75 2.75 0 0 1 25 17.75h-2A2.75 2.75 0 0 1 20.25 15v-2c0-.69-.56-1.25-1.25-1.25h-.354a2.751 2.751 0 0 1-2.646 2h-4a2.751 2.751 0 0 1-2.646-2zm-.104-6H5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4.25v-4.5zm9.5 4.5H19A2.75 2.75 0 0 1 21.75 13v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-4c0-2.9-2.35-5.25-5.25-5.25h-2.25v4.5zm-8-5.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25V5zM23.36 22.11a.75.75 0 0 1 1.28 0l.007.01.018.03.065.11a34.133 34.133 0 0 1 .936 1.676c.255.491.517 1.033.718 1.533.188.47.366 1.009.366 1.454 0 1.534-1.205 2.827-2.75 2.827s-2.75-1.293-2.75-2.827c0-.445.178-.984.366-1.454.2-.5.463-1.042.718-1.533a33.686 33.686 0 0 1 1.001-1.786l.018-.03.007-.01zm.64 1.893c-.108.195-.221.406-.334.624-.245.471-.483.964-.657 1.4-.187.467-.259.768-.259.896 0 .76.586 1.327 1.25 1.327s1.25-.567 1.25-1.327c0-.128-.072-.429-.259-.896a16.363 16.363 0 0 0-.657-1.4c-.113-.218-.226-.429-.334-.624z" clipRule="evenodd"/>
          </G>
          <G id="waterFlowing">
            <Path fill={dark?"none":"#2EC68F"} d="M10 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M9.354 11.75H5A2.75 2.75 0 0 1 2.25 9V7A2.75 2.75 0 0 1 5 4.25h4.354a2.751 2.751 0 0 1 2.646-2h4c1.259 0 2.32.846 2.646 2H21A6.75 6.75 0 0 1 27.75 11v4A2.75 2.75 0 0 1 25 17.75h-.25v10.5H31a.75.75 0 0 1 0 1.5H17a.75.75 0 0 1 0-1.5h6.25v-10.5H23A2.75 2.75 0 0 1 20.25 15v-2c0-.69-.56-1.25-1.25-1.25h-.354a2.751 2.751 0 0 1-2.646 2h-4a2.751 2.751 0 0 1-2.646-2zm-.104-6H5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4.25v-4.5zm9.5 4.5H19A2.75 2.75 0 0 1 21.75 13v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-4c0-2.9-2.35-5.25-5.25-5.25h-2.25v4.5zm-8-5.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25V5z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M29.53 23.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0zM18.47 24.53a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 1 1-1.06 1.06l-2-2z"/>
          </G>
          <G id="whistlingKettle">
            <Path fill={dark?"none":"#2EC68F"} d="M23.696 22.89l3.597-3.597a1 1 0 0 0 0-1.414l-1.415-1.415a1 1 0 0 0-1.414 0l-2.23 2.23a9.94 9.94 0 0 1 1.462 4.196z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M13.757 6.25a8.75 8.75 0 0 1 8.75 8.75v2.361l1.427-1.427a1.75 1.75 0 0 1 2.475 0l1.414 1.414a1.75 1.75 0 0 1 0 2.475l-3.347 3.348c.02.273.031.55.031.829v4a.75.75 0 0 1-.75.75h-20a.75.75 0 0 1-.75-.75v-4c0-2.33.741-4.486 2-6.246V15a8.75 8.75 0 0 1 8.75-8.75zm-7.25 9.813a10.711 10.711 0 0 1 7.25-2.813c2.794 0 5.339 1.066 7.25 2.813V15a7.25 7.25 0 1 0-14.5 0v1.063zm16.669 2.75c.435.79.775 1.64 1.002 2.535l2.585-2.585a.25.25 0 0 0 0-.354l-1.415-1.414a.25.25 0 0 0-.353 0l-1.82 1.819zM23.007 24a9.25 9.25 0 1 0-18.5 0v3.25h18.5V24z" clipRule="evenodd"/>
          </G>
          <G id="wind">
            <Path fill={dark?"none":"#2EC68F"} fillRule="evenodd" d="M21.778 8.583a4.5 4.5 0 1 0-7.156-5.367c.351.266.672.57.957.906A3.504 3.504 0 0 1 19.965 8H20c.666 0 1.28.217 1.778.583z" clip-rule="evenodd"/> 
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M28 13.25a.75.75 0 0 1 .75.75v1A3.75 3.75 0 0 1 25 18.75H11a.75.75 0 0 1 0-1.5h14A2.25 2.25 0 0 0 27.25 15v-1a.75.75 0 0 1 .75-.75zM24 28.75a.75.75 0 0 0 .75-.75v-1A3.75 3.75 0 0 0 21 23.25H7a.75.75 0 0 0 0 1.5h14A2.25 2.25 0 0 1 23.25 27v1c0 .414.336.75.75.75zM2.25 21a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zM22.803 8.509a5.25 5.25 0 0 0-8.374-6.324A6.75 6.75 0 0 0 4.284 7.318 3.751 3.751 0 0 0 5 14.75h15a3.75 3.75 0 0 0 2.803-6.241zM15.845 3.3a6.878 6.878 0 0 0-.216-.213 3.75 3.75 0 1 1 5.973 4.521 3.721 3.721 0 0 0-.856-.284A4.25 4.25 0 0 0 16.5 3.25a4.301 4.301 0 0 0-.655.05zM5.75 8a5.25 5.25 0 0 1 9.257-3.393.75.75 0 0 0 .769.24 2.753 2.753 0 0 1 3.446 3.047.75.75 0 0 0 .743.856H20a2.25 2.25 0 0 1 0 4.5H5a2.25 2.25 0 0 1 0-4.5.75.75 0 0 0 .75-.75z" clipRule="evenodd"/>
          </G>
        </Defs>
      <Use href={`#${name}`} />
    </Svg>
    )
}

export default Icons;
