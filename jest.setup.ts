import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

jest.mock('@farm-js/react-goat/component');
jest.mock('@farm-js/react-goat/goat');
jest.mock('@farm-js/react-goat/media/icons');
jest.mock('@farm-js/react-goat/containers/floating-container');
jest.mock('@floating-ui/react');

